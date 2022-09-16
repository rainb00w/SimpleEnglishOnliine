
import s from "../styles/faq.module.scss";
import Accordion from '../helpers/accordion';
import { accordionData } from '../data/content';


export default function Faq() {
  return (
    <>
      <div className={s.faqContainer} id="faq">
        <h2 className={s.faqH}>FAQ </h2>
        <span className={s.faqH2}>найчастіші запитання</span>

        <div className={s.accordion}>
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
      
      </div>
    </>
  );
}



// import { useState } from "react";

// const UseEmail = (endpointUrl) => {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState();

//   const sendEmail = (data) => {
//     setLoading(true);
//     setSubmitted(false);
//     setError(undefined);

//     fetch(endpointUrl, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
//         if (response.status === 422) {
//           throw new Error("Are you robot?");
//         }

//         if (response.status !== 200) {
//           throw new Error(`${response.statusText} (${response.status})`);
//         }

//         return response.json();
//       })
//       .then(() => {
//         setSubmitted(true);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.toString())
//         setLoading(false);
//       });
//   };

//   return {
//     submitted, loading, error, sendEmail
//   }
// };

// export default UseEmail;