"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { contact } from "@/content";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [optIn, setOptIn] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="contact" aria-label="Contact Us" className="flex flex-col items-center gap-10 xl:gap-[69px]">
      {/* Section Header */}
      <ScrollReveal animation="fade-up" className="flex w-full max-w-[719px] flex-col items-center gap-[21px] text-center">
        <h2 className="text-display-section text-text-primary">{contact.headline}</h2>
        <p className="text-body-lg text-text-secondary">
          {contact.subheadline}
        </p>
      </ScrollReveal>

      {/* Two-Column Layout */}
      <div className="flex w-full flex-col gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-0">
        {/* Left — Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-[38px] xl:w-[700px] xl:shrink-0"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-5">
            <label htmlFor={contact.form.fields[0].id} className="text-body-lg text-text-primary">
              {contact.form.fields[0].label}
            </label>
            <input
              id={contact.form.fields[0].id}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={contact.form.fields[0].placeholder}
              className="h-[84px] w-full rounded-pill border border-text-primary/50 bg-transparent px-6 text-body-lg text-text-primary placeholder:text-text-primary/50 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-[var(--duration-normal)]"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-5">
            <label htmlFor={contact.form.fields[1].id} className="text-body-lg text-text-primary">
              {contact.form.fields[1].label}
            </label>
            <input
              id={contact.form.fields[1].id}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={contact.form.fields[1].placeholder}
              className="h-[84px] w-full rounded-pill border border-text-primary/50 bg-transparent px-6 text-body-lg text-text-primary placeholder:text-text-primary/50 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-[var(--duration-normal)]"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-5">
            <label htmlFor={contact.form.fields[2].id} className="text-body-lg text-text-primary">
              {contact.form.fields[2].label}
            </label>
            <textarea
              id={contact.form.fields[2].id}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={contact.form.fields[2].placeholder}
              className="min-h-[277px] w-full resize-none rounded-pill border border-text-primary/50 bg-transparent px-6 pt-7 text-body-lg text-text-primary placeholder:text-text-primary/50 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-[var(--duration-normal)]"
            />
          </div>

          {/* Opt-in Row */}
          <button
            type="button"
            onClick={() => setOptIn(!optIn)}
            className="flex items-center gap-2.5 text-left"
            aria-pressed={optIn}
          >
            <CircleCheck
              className={`size-6 shrink-0 transition-colors duration-[var(--duration-normal)] ${
                optIn ? "text-teal-500" : "text-text-primary"
              }`}
              strokeWidth={2}
            />
            <span className="text-body-lg text-text-primary">
              {contact.form.optInLabel}
            </span>
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-button bg-teal-500 px-[25px] py-[15px] text-body-lg font-semibold text-text-on-dark tracking-[-0.025rem] transition-colors duration-[var(--duration-normal)] hover:bg-teal-400 active:bg-teal-800"
          >
            {contact.form.submitLabel}
          </button>
        </form>

        {/* Right — Contact Info */}
        <div className="flex w-full flex-col gap-12 xl:w-[580px] xl:shrink-0 xl:gap-[79px]">
          {contact.info.map((item) => (
            <div key={item.title} className="flex flex-col gap-[23px]">
              <h3 className="text-heading-contact text-teal-500">
                {item.title}
              </h3>
              <p className="text-body-lg text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
