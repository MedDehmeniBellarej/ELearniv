"use client";
import { useCartStore } from "@/store/cart";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutList from "./CheckoutList";
import { cartAmoutSub, cartTotal } from "@/utils/cartTotal";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ lang }) => {
	const { count, cart, remove } = useCartStore();
	const handleRemove = async (cartId) => {
		remove(cartId);
	};

	return (
		<>
			<div className="checkout-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-12">
							<div className="shopping-cart">
								<p>{count()} Course in Cart</p>

								<div className="shopping-cart-list">
									<div className="row align-items-center">
										{count() > 0 ? (
											cart.map((cart) => (
												<CheckoutList
													key={cart.id}
													{...cart}
													onRemove={() =>
														handleRemove(cart.id)
													}
												/>
											))
										) : (
											<>
												<div className="col-lg-12 text-center">
													<h3
														style={{
															textAlign: "center",
															fontWeight: "bold",
															color: "#0000001f",
															fontSize: "93px",
														}}
													>
														Empty
													</h3>
													<Link
														href={`/${lang}/courses`}
														className="default-btn"
													>
														<i className="flaticon-shopping-cart"></i>
														Continue Shopping
													</Link>
												</div>
											</>
										)}
									</div>
								</div>
							</div>
						</div>

						{count() > 0 && (
							<div className="col-lg-6 col-md-12">
								<p className="fs-18 mb-2">Subtotal:</p>
								<h1 className="fw-bold">
									${cartTotal(cart)}
									<del className="d-block fs-18 text-muted mt-2">
										${cartAmoutSub(cart)}
									</del>
								</h1>
								{/*<PlaceOrderBtn
									user={user}
									cartItems={cartItems}
								/> */}
								<hr />
								<Elements stripe={stripePromise}>
									<PaymentForm />
								</Elements>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutForm;
