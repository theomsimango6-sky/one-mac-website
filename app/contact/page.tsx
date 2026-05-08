"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form Data:", form); // temporary (we’ll connect backend later)

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 px-10 py-20">
      <div className="max-w-3xl mx-auto">

        <h
