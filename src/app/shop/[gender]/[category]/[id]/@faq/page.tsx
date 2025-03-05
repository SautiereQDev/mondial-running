"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const faqs = [
    {
      question: "Comment choisir la bonne taille ?",
      answer:
        "Nous recommandons de prendre une taille au-dessus de votre pointure habituelle pour les chaussures de running. Cela permet d'avoir suffisamment d'espace pour les orteils et tenir compte du gonflement du pied pendant la course.",
    },
    {
      question: "Quelle est la politique de retour ?",
      answer:
        "Vous disposez de 30 jours pour retourner gratuitement votre produit. La chaussure doit être dans son état d'origine et non portée en extérieur.",
    },
    {
      question: "Ces chaussures conviennent-elles pour le marathon ?",
      answer:
        "Cela dépend du modèle. Certaines de nos chaussures sont spécialement conçues pour les longues distances, tandis que d'autres sont plus adaptées pour les courtes et moyennes distances.",
    },
    {
      question: "Comment entretenir mes chaussures de running ?",
      answer:
        "Nettoyez-les régulièrement avec une brosse douce et de l'eau tiède. Évitez le sèche-linge et le contact direct avec des sources de chaleur. Laissez-les sécher naturellement à température ambiante.",
    },
    {
      question: "Quelle est la durée de vie moyenne ?",
      answer:
        "La durée de vie moyenne d'une chaussure de running est de 800 à 1000 km. Cependant, cela peut varier en fonction de votre style de course, votre poids et le terrain sur lequel vous courez.",
    },
  ];

  return (
    <div className="py-12 w-full bg-gradient-to-b from-white to-gray-50">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-gray-800">
            Questions fréquentes
          </h2>
        </div>

        <p className="text-gray-600 mb-8">
          Retrouvez ci-dessous les réponses aux questions les plus fréquemment
          posées sur nos produits. Si vous ne trouvez pas la réponse à votre
          question, n&apos;hésitez pas à contacter notre service client.
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-gray-100"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="text-left py-5 px-6 hover:bg-gray-50 text-gray-800 font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-6 pb-5 pt-0 text-base leading-relaxed">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-semibold text-blue-800 mb-2">
            Vous avez d&apos;autres questions ?
          </h3>
          <p className="text-blue-700 mb-5">
            Notre équipe est disponible pour vous aider et répondre à toutes vos
            questions.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            Contacter le support
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
