import React from "react";
import { BsPostcardHeart } from "react-icons/bs";

const Blogs = () => {
  return (
    <div>
      <div className="py-10 flex flex-col gap-8 px-2 md:px-4 lg:px-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold py-4">Blogs</h1>
          <p className="pb-6 px-3">
            {" "}
            Lets explore some basic concept that will make you a good developer{" "}
          </p>
        </div>

        {/* Qus-1 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            What is useState and how does it work in React?
          </div>
          <div className="collapse-content text-sm border-y border-dashed border-gray-200 py-2">
            <p className="text-blue-500 font-medium">Answer:</p>
            <p className="pl-14 font-medium lg:w-4xl">
              useState is a React hook used to add and manage state in
              functional components. It returns an array with a state variable
              and a function to update it. When the state changes, the component
              re-renders with the new value.
            </p>
          </div>
          <div className="py-2 pl-4 flex items-center gap-2 text-sm text-gray-600">
            <BsPostcardHeart className="text-xl" /> Added ans at April 22, 2023
          </div>
        </div>

        {/* Qus-2 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            What is the purpose of useEffect in React?
          </div>
          <div className="collapse-content text-sm border-y border-dashed border-gray-200 py-2">
            <p className="text-blue-500 font-medium">Answer:</p>
            <p className="pl-14 font-medium lg:w-4xl">
              useEffect is a React hook used to handle side effects like API
              calls, DOM updates, or timers. It runs after the component
              renders, and can re-run when dependencies change. You can also
              clean up effects using a return function inside useEffect.
            </p>
          </div>
          <div className="py-2 pl-4 flex items-center gap-2 text-sm text-gray-600">
            <BsPostcardHeart className="text-xl" /> Added ans at April 22, 2023
          </div>
        </div>

        {/* Qus-3 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            What is a custom hook in React and when should you use one?
          </div>
          <div className="collapse-content text-sm border-y border-dashed border-gray-200 py-2">
            <p className="text-blue-500 font-medium">Answer:</p>
            <p className="pl-14 font-medium lg:w-4xl">
              A custom hook is a JavaScript function that uses React hooks like
              useState or useEffect. It allows you to reuse logic across
              multiple components without repeating code. Use one when you find
              yourself writing the same hook logic in multiple places.
            </p>
          </div>
          <div className="py-2 pl-4 flex items-center gap-2 text-sm text-gray-600">
            <BsPostcardHeart className="text-xl" /> Added ans at April 22, 2023
          </div>
        </div>

        {/* Qus-4 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            Difference between controlled and uncontrolled components. Which one
            is better?
          </div>
          <div className="collapse-content text-sm border-y border-dashed border-gray-200 py-2">
            <p className="text-blue-500 font-medium">Answer:</p>
            <p className="pl-14 font-medium lg:w-4xl">
              Controlled components use React state to manage form inputs, while
              uncontrolled components use the DOM directly via refs. Controlled
              gives you more control and validation power, whereas uncontrolled
              is simpler and faster for basic forms. Controlled components are
              generally better for complex forms due to their flexibility.
            </p>
          </div>
          <div className="py-2 pl-4 flex items-center gap-2 text-sm text-gray-600">
            <BsPostcardHeart className="text-xl" /> Added ans at April 22, 2023
          </div>
        </div>

        {/* Qus-5 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            Tell us something about useFormStatus() in React.
          </div>
          <div className="collapse-content text-sm border-y border-dashed border-gray-200 py-2">
            <p className="text-blue-500 font-medium">Answer:</p>
            <p className="pl-14 font-medium lg:w-4xl">
              useFormStatus() is a React hook from the react-dom library, used
              with form in Server Components. It gives you the current status of
              the form, like if it's submitting or has errors. This helps to
              show loading indicators, disable buttons, or handle errors
              smoothly.
            </p>
          </div>
          <div className="py-2 pl-4 flex items-center gap-2 text-sm text-gray-600">
            <BsPostcardHeart className="text-xl" /> Added ans at April 22, 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
