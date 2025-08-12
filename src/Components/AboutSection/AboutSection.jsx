
import React from "react";
import { Users, MessageSquare, Share2 } from "lucide-react";

export default function AboutSection({ className = "", onContribute = () => { } }) {
    const missionTitle = "About Us";
    const missionText = `Our mission is to provide people with reliable and accessible information and tools, empowering them to take action. We believe change happens when knowledge is shared openly, communities work together, and every voice is valued.`;
    const purposeText = `This platform exists to deliver curated resources, foster collaboration, and spark conversations on important topics.`;

    return (
        <section className={`bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 text-gray-800 dark:text-gray-100 py-16 ${className}`} aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                    <div>
                        <h2 id="about-heading" className="text-4xl font-extrabold leading-tight tracking-tight">{missionTitle}</h2>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">{missionText}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onContribute}
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                        >
                            <Share2 className="w-5 h-5" />
                            Contribute
                        </button>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                            Contact Us
                        </a>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <article className="col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold mb-4">Our Purpose</h3>
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{purposeText}</p>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <li className="flex items-start gap-4">
                                <div className="flex-none w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900 grid place-items-center shadow-sm">
                                    <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Community Building</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Fostering connections through discussions and support.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="flex-none w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900 grid place-items-center shadow-sm">
                                    <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-300" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Knowledge Sharing</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Help others by sharing articles, guides, and tutorials.</p>
                                </div>
                            </li>
                        </ul>
                    </article>

                    <aside className="rounded-3xl p-8 bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                        <h4 className="text-xl font-semibold">How You Can Help</h4>
                        <ol className="mt-5 space-y-4 text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside">
                            <li>Share valuable knowledge – articles, guides, or tips.</li>
                            <li>Join the conversation – add your insights in comments and forums.</li>
                            <li>Give feedback – let us know what works and what can improve.</li>
                            <li>Spread the word – introduce our mission to your network.</li>
                        </ol>

                        <div className="mt-8">
                            <a
                                href="#contribute"
                                className="block w-full text-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                                onClick={(e) => { e.preventDefault(); onContribute(); }}
                            >
                                Start Contributing
                            </a>
                        </div>
                    </aside>
                </div>

                <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400 text-center">
                    <p>Together, we can make this a place where ideas grow, solutions emerge, and positive change happens.</p>
                </footer>
            </div>
        </section>
    );
}
