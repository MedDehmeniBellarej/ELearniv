// components/DiscussionForm.js
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import TextArea from "./TextArea";

const DiscussionForm = ({ courseId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    axios
      .post(`/api/courses/${courseId}/discussion`, data)
      .then((response) => {
        toast.success("Discussion submitted successfully!");
        router.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between">
        <h3>Start a Discussion</h3>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <TextArea
              id="comment"
              placeholder="Write your discussion post"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            disabled={isLoading}
            className="default-btn"
          >
            <i className="flaticon-right-arrow"></i>
            Submit
            <span></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default DiscussionForm;
