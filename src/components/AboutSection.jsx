export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-orange-500 text-xl mb-4 font-semibold tracking-wide">
                        Skills & Capabilities
                    </h2>

                    <h3 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
                        Business Analyst with Technical Background
                    </h3>

                    {/* Summary */}
                    <p className="text-white/80 leading-relaxed mb-8 drop-shadow-sm">
                        I focus on analyzing business processes and transforming requirements into clear, practical solutions.
                        With hands-on experience in ERP systems and a solid understanding of web technologies, I bridge the gap
                        between business needs and development teams.
                    </p>

                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div className="relative">
                        <div className="w-full h-96 bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-lg overflow-hidden shadow-2xl shadow-orange-500/20">
                            <img
                                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop"
                                alt="About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 blur-3xl -z-10"></div>
                    </div>

                    {/* Content */}
                    <div>

                        {/* Skill blocks - 2 column grid */}
                        <div className="grid md:grid-cols-2 gap-4">

                            {/* Business / ERP */}
                            <div className="md:col-span-2 bg-gradient-to-br from-orange-500/5 to-transparent p-4 rounded-lg border border-orange-500/20 shadow-lg shadow-orange-500/10">
                                <h4 className="text-orange-500 font-semibold mb-3">
                                    Business & ERP
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Requirement Analysis",
                                        "Business Process Modeling",
                                        "Inventory Management",
                                        "Sales & POS Systems",
                                        "Accounting Workflow",
                                        "User Acceptance Support",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm text-white
                                            bg-gradient-to-br from-orange-500/20 to-orange-600/10
                                            border border-orange-500/40 rounded-xl
                                            shadow-md hover:shadow-orange-500/30
                                            hover:scale-105 transition-all cursor-pointer"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {/* Technical Skills */}
                            <div className="md:col-span-2 bg-gradient-to-br from-orange-500/5 to-transparent p-4 rounded-lg border border-orange-500/20 shadow-lg shadow-orange-500/10">
                                <h4 className="text-orange-500 font-semibold mb-3">
                                    Technical Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "C# / .NET",
                                        "ASP.NET Core API",
                                        "SQL",
                                        "Entity Framework Core",
                                        "LINQ",
                                        "JWT Authentication",
                                        "Unit Testing (xUnit, Moq)",
                                        "Flutter UI",
                                        "Flutter API Integration",
                                        "Flutter Navigation",
                                        "Java Core (OOP)",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm text-white
                                            bg-gradient-to-br from-orange-500/20 to-orange-600/10
                                            border border-orange-500/40 rounded-xl
                                            shadow-md hover:shadow-orange-500/30
                                            hover:scale-105 transition-all cursor-pointer"
                                                                    >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {/* Programming - Full width */}
                            <div className="md:col-span-2 bg-gradient-to-br from-orange-500/5 to-transparent p-4 rounded-lg border border-orange-500/20 shadow-lg shadow-orange-500/10">
                                <h4 className="text-orange-500 font-semibold mb-3">
                                    Programming & UI
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["HTML", "CSS", "SCSS", "JavaScript", "React", "Bootstrap", "Figma"].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm text-white bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/40 rounded-xl shadow-md hover:shadow-orange-500/30 hover:scale-105 transition-all cursor-pointer"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Strengths - Full width */}
                            <div className="md:col-span-2 bg-gradient-to-br from-orange-500/5 to-transparent p-4 rounded-lg border border-orange-500/20 shadow-lg shadow-orange-500/10">
                                <h4 className="text-orange-500 font-semibold mb-3">
                                    Strengths
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-white/80 text-sm">
                                    <div>• Clear Communication</div>
                                    <div>• Stakeholder Collaboration</div>
                                    <div>• System Thinking</div>
                                    <div>• User-Centered Mindset</div>
                                    <div>• Detail-Oriented</div>
                                    <div>• Problem Solving</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}