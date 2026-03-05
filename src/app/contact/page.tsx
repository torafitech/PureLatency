"use client";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import styles from "./Contact.module.css";
import { db } from "@/firebase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    email: "",
    designation: "",
    enquiry: "Collaboration",
    country: "United States",
    message: "",
  });

  const [phoneValue, setPhoneValue] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  // ==================== COUNTRIES ====================
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Macedonia",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Réunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ].sort();

  // ==================== ALLOWED COUNTRY CODES FOR PHONE INPUT ====================
  const allowedCountryCodes = [
    "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR",
    "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY",
    "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV",
    "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA",
    "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG",
    "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK",
    "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ",
    "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA",
    "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU",
    "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK",
    "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT",
    "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "XK",
    "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT",
    "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ",
    "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS",
    "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI",
    "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW",
    "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR",
    "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF",
    "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL",
    "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES",
    "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ",
    "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC",
    "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU",
    "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW",
  ].sort();

  const socialMedia = [
    {
      name: "Instagram",
      href: "https://instagram.com/purelatency",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
      color: "#E4405F",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/purelatency",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
      color: "#1877F2",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/purelatency",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg",
      color: "#000000",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Submit clicked");  // debug
  console.log("Form data:", formData, "Phone:", phoneValue); // debug

  setIsSubmitting(true);
  setSubmitStatus({ type: null, message: "" });

  try {
    if (!phoneValue) {
      throw new Error("Phone number is required");
    }

    if (!formData.fullName || !formData.email || !formData.message) {
      throw new Error("Please fill all required fields.");
    }

    const submissionData = {
      ...formData,
      phoneNumber: phoneValue,
      submittedAt: new Date().toISOString(),
      status: "new",
      userAgent:
        typeof navigator !== "undefined" ? navigator.userAgent : "",
      timestamp: new Date().getTime(),
    };

    console.log("Submitting to Firestore:", submissionData); // debug

    const docRef = await addDoc(collection(db, "contacts"), submissionData);
    console.log("Document written with ID:", docRef.id);

    setSubmitStatus({
      type: "success",
      message: "Thank you for your enquiry! We'll get back to you soon.",
    });

    setFormData({
      fullName: "",
      organisation: "",
      email: "",
      designation: "",
      enquiry: "Collaboration",
      country: "United States",
      message: "",
    });
    setPhoneValue("");
  } catch (error) {
    console.error("Error submitting form:", error);
    setSubmitStatus({
      type: "error",
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
      <Navbar />

      <section className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={social.name}
            >
              <img src={social.icon} alt="" className={styles.socialIcon} />
            </a>
          ))}
        </div>

        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Contact Us</h1>

          <p className={styles.description}>
            We endeavour to respond to your email as soon as possible. When
            sending an enquiry, please fill your contact details and indicate
            the request purpose for our follow-up.
          </p>

          {submitStatus.type && (
            <div
              className={`${styles.statusMessage} ${
                submitStatus.type === "success"
                  ? styles.statusSuccess
                  : styles.statusError
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.formGrid}>
            {/* LEFT COLUMN */}
            <div className={styles.column}>
              <Input
                label="Full name *"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <Input
                label="Organisation (optional)"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
              />

              <div className={styles.field}>
                <label className={styles.label}>Enquiry Category *</label>
                <select
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option>Collaboration</option>
                  <option>Feedback</option>
                  <option>Support</option>
                  <option>Sales</option>
                  <option>Others</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Phone Number *</label>
                <PhoneInput
                  value={phoneValue}
                  onChange={(value) => setPhoneValue(value || "")}
                  defaultCountry="US"
                  country={allowedCountryCodes}
                  className={styles.phoneInput}
                  required
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className={styles.column}>
              <Input
                label="Email address *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Designation (optional)"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />

              <div className={styles.field}>
                <label className={styles.label}>Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* FULL WIDTH TEXTAREA */}
            <div className={styles.fullWidth}>
              <div className={styles.field}>
                <label className={styles.label}>
                  Tell us more about your enquiry *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={styles.textarea}
                  required
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className={`${styles.fullWidth} ${styles.submitContainer}`}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
              <p className={styles.requiredNote}>* Required fields</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

/* Reusable Input Component */
function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        required={required}
      />
    </div>
  );
}
