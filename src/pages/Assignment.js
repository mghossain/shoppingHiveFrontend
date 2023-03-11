import React from 'react';

const Assignment = () => {
    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">
                Technical Assignment Full-Stack Engineer
            </h1>

            <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                You’re working on an online shopping platform.
                The sales team wants to know which items were added to a basket, but removed before checkout.
                We will use this data later for targeted discounts.
            </p>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400">
                Build a shopping basket that helps you get this data.
                You are free to use the languages, frameworks and tools you prefer.
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">We
                Timing
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400">
                You have 1 week to accomplish the assignment. You decide yourself how much time and effort you invest in it,
                but one of our colleagues tends to say: "Make sure it is good" ;-).
                Please send us (jobs@madewithlove.com) an email when you are ready with the assignment.
                Please mention your name, Github username and a link to what we need to review.
            </p>


        </div>
    );
};

export default Assignment;