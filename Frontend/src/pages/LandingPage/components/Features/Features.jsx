import { Bell, Calculator, CreditCard, Shield, Smartphone, Users } from "lucide-react";
import React from "react";

import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: "Smart Splitting",
      description: "Automatically calculate who owes what with intelligent expense algorithms.",
    },
    {
      icon: Users,
      title: "Group Management",
      description: "Create and manage multiple groups for trips, roommates, or regular hangouts.",
    },
    {
      icon: Smartphone,
      title: "AI Agent",
      description:
        "Ask simple questions about your spending and balances, and get instant answers.",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description:
        "Support for various payment methods including Venmo, PayPal, bank transfers, and cash.",
    },
    {
      icon: Bell,
      title: "Expense Reports",
      description:
        " View monthly and yearly reports with charts to understand your spending habits..",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Bank-level security with end-to-end encryption to keep your financial data safe.",
    },
  ];

  return (
    <section id="features" className="features lp-section">
      <div className="container">
        <div className="features-header">
          <h2 className="lp-heading-2 animate-fade-in text-center">
            Everything you need to track expenses
          </h2>
          <p className="lp-text-large lp-text-muted animate-fade-in text-center">
            Powerful features designed to make splitting bills and managing personal expenses
            effortless.{" "}
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`feature-item animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="lp-feature-icon">
                  <Icon className="icon icon-large" />
                </div>
                <div className="feature-content">
                  <h3 className="lp-heading-3">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
