import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define categories as a constant tuple
const categories = ['General', 'Pass', 'Ticket'] as const;
type Category = typeof categories[number];

// Language options
type Language = "en" | "hi" | "mr";

// Multilingual content
const languageContent: Record<Language, {
  title: string;
  buttonLabel: string;
  categories: Record<Category, string>;
  questions: Record<Category, { question: string; answer: string }[]>;
}> = {
  en: {
    title: "Help",
    buttonLabel: "Raise New Complaint",
    categories: {
      General: "General",
      Pass: "Pass",
      Ticket: "Ticket"
    },
    questions: {
      General: [
        {
          question: "I am unable to verify my phone number.",
          answer: "Phone number verification is not required to use the app at this time."
        },
        {
          question: "How many buses are trackable?",
          answer: "Currently, 1200 buses are trackable in the Apli PMPML app. Additional buses are being added daily and all buses will be trackable soon."
        },
        {
          question: "What is the frequency of location updates?",
          answer: "Location updates occur every 10 to 30 seconds."
        },
        {
          question: "Why is no bus showing on the app in my area?",
          answer: "The buses in your area might not have GPS devices configured yet. They will be configured soon, and buses will then be visible in the app."
        }
      ],
      Pass: [
        {
          question: "Can I book a pass in advance?",
          answer: "Yes, passes can be generated in advance."
        },
        {
          question: "My transaction is completed, but the pass is still showing as pending. What should I do?",
          answer: "Due to payment delays, passes may take up to 3 minutes to generate. Please wait for 3 minutes before attempting to book a new pass."
        },
        {
          question: "It has been 3 minutes, and the pass is still showing as pending. What now?",
          answer: "If the pass is still pending after 3 minutes, please purchase a new pass either online or from the conductor. If the previous payment was debited, it will be refunded to your bank account within 24-48 hours."
        },
        {
          question: "A pass older than 1 day is still showing as pending.",
          answer: "This pass has been refunded. Please check your bank statement for the refund."
        },
        {
          question: "How can I confirm if I received a refund for my pending pass?",
          answer: "Refunds are automatically processed within 24-48 hours if the pass was not generated. Please check your bank account statement to verify the refund."
        }
      ],
      Ticket: [
        {
          question: "What is the validity of a ticket?",
          answer: "The answer to this question is not provided in the image."
        },
        {
          question: "Can I book a ticket in advance?",
          answer: "No, tickets are activated immediately upon purchase. Advance ticket booking is not available."
        },
        {
          question: "My transaction is completed, but the ticket is still showing as pending. What should I do?",
          answer: "Due to payment delays, tickets may take up to 3 minutes to generate. Please wait for 3 minutes before attempting to book a new ticket."
        },
        {
          question: "It has been 3 minutes, and the ticket is still showing as pending. What now?",
          answer: "If the ticket is still pending after 3 minutes, please purchase a new ticket either online or from the conductor. If the previous payment was debited, it will be refunded to your bank account within 24-48 hours."
        },
        {
          question: "A ticket older than 1 day is still showing as pending.",
          answer: "This ticket has been refunded. Please check your bank statement for the refund."
        },
        {
          question: "How can I confirm if I received a refund for my pending ticket?",
          answer: "Refunds are automatically processed within 24-48 hours if the ticket was not generated. Please check your bank account statement to verify the refund."
        }
      ]
    }
  },

  hi: {
    title: "सहायता",
    buttonLabel: "नई शिकायत दर्ज करें",
    categories: {
      General: "सामान्य",
      Pass: "पास",
      Ticket: "टिकट"
    },
    questions: {
      General: [
        { question: "मैं अपना फ़ोन नंबर सत्यापित नहीं कर पा रहा हूँ।", answer: "इस समय ऐप का उपयोग करने के लिए फ़ोन नंबर सत्यापन आवश्यक नहीं है।" },
        { question: "कितनी बसें ट्रैक की जा सकती हैं?", answer: "वर्तमान में Apli PMPML ऐप में 1200 बसें ट्रैक की जा सकती हैं। रोज़ नई बसें जोड़ी जा रही हैं।" },
        { question: "लोकेशन अपडेट की आवृत्ति क्या है?", answer: "स्थान अपडेट हर 10 से 30 सेकंड में होते हैं।" },
        { question: "मेरे क्षेत्र में कोई बस ऐप में क्यों नहीं दिख रही?", answer: "आपके क्षेत्र की बसों में GPS डिवाइस नहीं जोड़ा गया हो सकता है। जल्द ही जोड़ा जाएगा।" }
      ],
      Pass: [
        { question: "क्या मैं पास अग्रिम में बुक कर सकता हूँ?", answer: "हाँ, पास अग्रिम में जेनरेट किए जा सकते हैं।" },
        { question: "लेनदेन पूरा हुआ लेकिन पास लंबित दिख रहा है, क्या करूँ?", answer: "भुगतान विलंब के कारण पास बनने में 3 मिनट तक लग सकते हैं। कृपया प्रतीक्षा करें।" },
        { question: "3 मिनट हो गए और पास अभी भी लंबित है, अब क्या?", answer: "एक नया पास खरीदें और पूर्व भुगतान की राशि 24-48 घंटों में वापस आ जाएगी।" },
        { question: "1 दिन पुराना पास अब भी लंबित है।", answer: "इस पास के लिए धनवापसी हो गई है। कृपया अपना बैंक विवरण जांचें।" },
        { question: "मैं धनवापसी की पुष्टि कैसे करूं?", answer: "अगर पास जेनरेट नहीं हुआ है, तो धनवापसी 24-48 घंटों में हो जाती है। बैंक स्टेटमेंट जांचें।" }
      ],
      Ticket: [
        { question: "टिकट की वैधता क्या है?", answer: "इस प्रश्न का उत्तर उपलब्ध नहीं है।" },
        { question: "क्या मैं टिकट अग्रिम में बुक कर सकता हूँ?", answer: "नहीं, टिकट खरीद के साथ ही सक्रिय हो जाता है।" },
        { question: "लेनदेन पूरा हुआ लेकिन टिकट लंबित है, क्या करूँ?", answer: "भुगतान में विलंब हो सकता है, कृपया 3 मिनट प्रतीक्षा करें।" },
        { question: "3 मिनट हो गए और टिकट अब भी लंबित है?", answer: "नया टिकट खरीदें और पुराना भुगतान 24-48 घंटे में वापस आ जाएगा।" },
        { question: "1 दिन पुराना टिकट अब भी लंबित है।", answer: "टिकट के लिए धनवापसी हो चुकी है। कृपया अपना बैंक विवरण देखें।" },
        { question: "धनवापसी की पुष्टि कैसे करें?", answer: "अगर टिकट नहीं बना तो धनवापसी अपने आप 24-48 घंटे में हो जाती है।" }
      ]
    }
  },

  mr: {
    title: "मदत",
    buttonLabel: "तक्रार नोंदवा",
    categories: {
      General: "सामान्य",
      Pass: "पास",
      Ticket: "तिकीट"
    },
    questions: {
      General: [
        { question: "मी माझा फोन नंबर सत्यापित करू शकत नाही.", answer: "सध्या अ‍ॅप वापरण्यासाठी फोन नंबर सत्यापन आवश्यक नाही." },
        { question: "कोणत्या बसेस ट्रॅक केल्या जाऊ शकतात?", answer: "1200 बसेस ट्रॅक केल्या जाऊ शकतात आणि इतर बस लवकरच जोडल्या जातील." },
        { question: "लोकेशन अपडेटची फ्रिक्वेंसी काय आहे?", answer: "10 ते 30 सेकंदांमध्ये लोकेशन अपडेट केले जाते." },
        { question: "माझ्या भागात बस का दिसत नाही?", answer: "आपल्या भागातील बसमध्ये GPS डिव्हाइस अद्याप जोडले गेले नाही. लवकरच ते जोडले जातील." }
      ],
      Pass: [
        { question: "मी आगाऊ पास बुक करू शकतो का?", answer: "होय, पास आगाऊ तयार केला जाऊ शकतो." },
        { question: "व्यवहार पूर्ण झाला, पण पास अजूनही प्रलंबित आहे.", answer: "पेमेंट डिले मुळे 3 मिनिटे प्रतीक्षा करा." },
        { question: "3 मिनिटे झाली, पास अजूनही प्रलंबित आहे.", answer: "नवीन पास खरेदी करा. जुना पेमेंट 24-48 तासांत परत मिळेल." },
        { question: "1 दिवस जुना पास अजूनही प्रलंबित आहे.", answer: "धनवापसी झाली आहे. तुमच्या बँक स्टेटमेंटमध्ये तपासा." },
        { question: "माझ्या पासची धनवापसी झाली का हे कसे तपासावे?", answer: "जर पास जनरेट झाला नसेल तर 24-48 तासांत आपोआप धनवापसी होते." }
      ],
      Ticket: [
        { question: "तिकीटची वैधता काय आहे?", answer: "या प्रश्नाचे उत्तर उपलब्ध नाही." },
        { question: "मी तिकीट आगाऊ बुक करू शकतो का?", answer: "नाही, खरेदीसोबतच तिकीट सक्रिय होते." },
        { question: "व्यवहार पूर्ण झाला, पण तिकीट अजूनही प्रलंबित आहे.", answer: "3 मिनिटे प्रतीक्षा करा." },
        { question: "3 मिनिटे झाली, तिकीट अजूनही प्रलंबित आहे.", answer: "नवीन तिकीट घ्या. जुने पेमेंट परत मिळेल." },
        { question: "1 दिवस जुने तिकीट अजूनही प्रलंबित आहे.", answer: "धनवापसी झाली आहे." },
        { question: "धनवापसी झाली का हे कसे कळेल?", answer: "जर तिकीट तयार झाले नसेल तर 24-48 तासांत धनवापसी होते." }
      ]
    }
  }
};

const Help: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const navigate = useNavigate();
  const [openIndexes, setOpenIndexes] = useState<Record<Category, number | null>>({
    General: null,
    Pass: null,
    Ticket: null
  });

  const toggle = (category: Category, index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  const content = languageContent[language];

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <select
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.categories[category]}</h3>
          {content.questions[category].map((faq, index) => (
            <div key={index} className="border-b py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(category, index)}
              >
                <h4 className="font-medium text-gray-900">{faq.question}</h4>
                {openIndexes[category] === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              {openIndexes[category] === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      ))}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/complaints")}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
        >
          {content.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Help;
