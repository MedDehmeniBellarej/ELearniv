"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import Image from "next/image";
import { cartAmoutSub, cartTotal } from "@/utils/cartTotal";

const Cart = ({ lang, empty, total, gotocheckout }) => {
	const { count, cart } = useCartStore();
	// console.log("cart", cart);
	return (
		<div className="option-item">
			<div className="cart-btn">
				<div className="dropdown">
					<Link
						href={`/${lang}/checkout`}
						className="cart-link ptb-15"
					>
						<i className="flaticon-shopping-cart"></i>{" "}
						<span>{count()}</span>
					</Link>

					<ul className="dropdown-menu">
						{count() > 0 ? (
							cart.map((crt) => (
								<li key={crt.id}>
									<Link
										className="dropdown-item"
										href={`/${lang}/course/${crt.slug}`}
									>
										<div className="d-flex align-items-center">
											<div>
												<Image
													src={crt.image}
													alt={crt.title}
													width={150}
													height={100}
												/>
											</div>
											<div className="ps-3">
												<h6 className="fw-bold fs-14 mb-1">
													{crt.title}
												</h6>
												<p className="fs-13 mb-2">
													By: {crt.user}
												</p>
												<div className="price fs-13">
													<strong>
														${crt.regular_price}
													</strong>{" "}
													<del className="fs-12 text-muted ms-1">
														${crt.before_price}
													</del>
												</div>
											</div>
										</div>
									</Link>
								</li>
							))
						) : (
							<li className="empty">{empty}</li>
						)}

						<li>
							<hr className="dropdown-divider" />
						</li>

						<li className="px-4 pb-2">
							<h5 className="pt-2 fw-bold">
								{total}: ${cartTotal(cart)}{" "}
								<del className="fs-14 ms-1 text-muted">
									${cartAmoutSub(cart)}
								</del>
							</h5>
							<Link
								href={`/${lang}/checkout`}
								className="default-btn-style-3 d-block"
							>
								{gotocheckout} <span></span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cart;
