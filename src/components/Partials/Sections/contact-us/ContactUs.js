// 'use client';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { CONTACTS, QUOTES } from '../../../../Utilities/APIs';
// import { useRouter } from 'next/navigation'
// import './contact-us.css';

// function ContactUs({contacts}) {
// 	// const [contacts, setContacts] = useState([]);
// 	const router = useRouter();

// 	// useEffect(() => {
// 	// 	async function getContacts() {
// 	// 		const { data } = await axios.get(CONTACTS);
// 	// 		setContacts(data[0]);
// 	// 	}
// 	// 	getContacts();
// 	// }, []);

// 	const {
// 		register,
// 		formState: { errors },
// 		handleSubmit,
// 	} = useForm();
// 	const onSubmit = async (data, e) => {
// 		const response = await axios.post(QUOTES, data);
// 		if (response) {
// 			toast.success('Request successfully received', {
// 				theme: 'dark',
// 			});
// 			e.target.reset();
// 			router.push('/thank-you')
// 		}
// 	};

// 	const [verified, setVerified] = useState(false);
// 	function handleChange(value) {
// 		setVerified(value);
// 	}

// 	return (
// 		<section className="contact_us">
// 			<div className="container">
// 				<div className="contact_box">
// 					<div className="content">
// 						<h6>contact us</h6>
// 						<h1>Need something done? We’re here to help!</h1>
// 						<p>
// 							Contact us at <span>{contacts[0]?.email}</span> - or
// 							call us at <span>{contacts[0]?.phone}</span>
// 						</p>
// 					</div>
// 					<div className="form_wrapper">
// 						<form
// 							className="contact_form"
// 							onSubmit={handleSubmit(onSubmit)}
// 						>
// 							<div>
// 								<input
// 									type="text"
// 									className="input_field"
// 									placeholder="Your Name"
// 									{...register('name', { required: true })}
// 								/>
// 								<span className="error">
// 									{errors.name?.type === 'required' &&
// 										'Add your name'}
// 								</span>
// 							</div>

// 							<div>
// 								<input
// 									type="email"
// 									className="input_field"
// 									placeholder="Your Email"
// 									{...register('email', { required: true })}
// 								/>
// 								<span className="error">
// 									{errors.email?.type === 'required' &&
// 										'Add your email'}
// 								</span>
// 							</div>
// 							<div>
// 								<input
// 									type="text"
// 									className="input_field"
// 									placeholder="Your Phone Number"
// 									{...register('phone', { required: true })}
// 								/>
// 								<span className="error">
// 									{errors.phone?.type === 'required' &&
// 										'Add your phone number'}
// 								</span>
// 							</div>
// 							<div>
// 								<input
// 									type="text"
// 									className="input_field"
// 									placeholder="Your Organization"
// 									{...register('organization', {
// 										required: true,
// 									})}
// 								/>
// 								<span className="error">
// 									{errors.organization?.type === 'required' &&
// 										'Add your organization'}
// 								</span>
// 							</div>
// 							<div>
// 								<textarea
// 									cols="30"
// 									rows="4"
// 									placeholder="Your Message"
// 									{...register('message', { required: true })}
// 								></textarea>
// 								<span className="error">
// 									{errors.message?.type === 'required' &&
// 										'Add your message'}
// 								</span>
// 							</div>
// 							<div>
// 								<ReCAPTCHA
// 									sitekey="6LfxawoiAAAAAC8WFChDYAiyUkYiUprPsCsdu-1F"
// 									onChange={handleChange}
// 								/>
// 							</div>
// 							{verified && (
// 								<button
// 									type="submit"
// 									className="button border"
// 								>
// 									submit
// 								</button>
// 							)}
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default ContactUs;

"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CONTACTS, QUOTES } from "../../../../Utilities/APIs";
import { useRouter } from "next/navigation";
import "./contact-us.css";
import { getData } from "@/app/page";

function ContactUs({ contacts }) {
  const [localContacts, setLocalContacts] = useState(contacts || []);
  const router = useRouter();

  useEffect(() => {
    if (!contacts || contacts.length === 0) {
      async function getContacts() {
        try {
          const { homepage } = await getData();
          setLocalContacts(homepage?.contacts);
        } catch (error) {
          // console.error("Failed to fetch contacts:", error);
        }
      }
      getContacts();
    }
  }, [contacts]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      const response = await axios.post(QUOTES, data);
      if (response) {
        toast.success("Request successfully received", {
          theme: "dark",
        });
        e.target.reset();
        router.push("/thank-you");
      }
    } catch (error) {
      toast.error("Failed to submit the request", {
        theme: "dark",
      });
    }
  };

  const [verified, setVerified] = useState(false);

  function handleChange(value) {
    setVerified(!!value);
  }

  return (
    <section className="contact_us">
      <div className="container">
        <div className="contact_box">
          <div className="content">
            <h6>Contact Us</h6>
            <h1>Need something done? We’re here to help!</h1>
            <p>
              Contact us at <span>{localContacts[0]?.email || "N/A"}</span> - or
              call us at <span>{localContacts[0]?.phone || "N/A"}</span>
            </p>
          </div>
          <div className="form_wrapper">
            <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  className="input_field"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
                <span className="error">
                  {errors.name?.type === "required" && "Add your name"}
                </span>
              </div>

              <div>
                <input
                  type="email"
                  className="input_field"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
                <span className="error">
                  {errors.email?.type === "required" && "Add your email"}
                </span>
              </div>
              <div>
                <input
                  type="text"
                  className="input_field"
                  placeholder="Your Phone Number"
                  {...register("phone", { required: true })}
                />
                <span className="error">
                  {errors.phone?.type === "required" && "Add your phone number"}
                </span>
              </div>
              <div>
                <input
                  type="text"
                  className="input_field"
                  placeholder="Your Organization"
                  {...register("organization", {
                    required: true,
                  })}
                />
                <span className="error">
                  {errors.organization?.type === "required" &&
                    "Add your organization"}
                </span>
              </div>
              <div>
                <textarea
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                ></textarea>
                <span className="error">
                  {errors.message?.type === "required" && "Add your message"}
                </span>
              </div>
              <div>
                <ReCAPTCHA
                  sitekey="6LfxawoiAAAAAC8WFChDYAiyUkYiUprPsCsdu-1F"
                  onChange={handleChange}
                />
              </div>
              {verified && (
                <button type="submit" className="button border">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
