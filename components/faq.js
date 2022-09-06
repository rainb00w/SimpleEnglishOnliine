
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
