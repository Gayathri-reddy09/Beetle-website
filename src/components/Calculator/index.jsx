
import Details from "./Details";
import Calculate from "./Calculate";


function Calculator() {
  const calculatorDetails = [
    {
      id: 1,
      title: "Number of Team Members:",
      question: "How many people are in your firm’s deal team?",
    },
    {
      id: 2,
      title: "Size of Network:",
      question: "How many contacts are in your network?",
    },
    {
      id: 3,
      title: "Number of Signals Per Contact:",
      question: "How many signals (job changes, investments, mentions)?",
      average: "1 signal per 2 contacts.",
    },
    {
      id: 4,
      title: "Percent of Legitimate Signals:",
      question: "Signals that can lead you to reach out to a certain company.",
      average: "10%",
    },
    {
      id: 5,
      title: "Percent of Hard to Discover Signals:",
      question:
        "Signals that can only be discovered with relationship intelligence technology.",
      average: "10 to 20%",
    },
  ];

  return (
    <section
      id="calculator"
      className="flex flex-col lg:flex-row gap-6 xl:gap-0 justify-between text-black my-32 mx-6 sm:mx-10 xl:mx-20"
    >
      <Details details={calculatorDetails} />
      <Calculate />
    </section>
  );
}

export default Calculator;
