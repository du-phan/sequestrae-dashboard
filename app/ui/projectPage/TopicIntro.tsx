import React from "react";

interface TopicIntroProps {
  /**
   * The title of the topic to be displayed as H2
   */
  title: string;

  /**
   * A brief description or introduction text for the topic
   */
  description: string;
}

/**
 * TopicIntro component - Displays a topic title and brief introduction
 * Used at the top of each topic page in the project dashboard
 */
const TopicIntro: React.FC<TopicIntroProps> = ({ title, description }) => {
  return (
    <div className="mt-8 mb-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TopicIntro;
