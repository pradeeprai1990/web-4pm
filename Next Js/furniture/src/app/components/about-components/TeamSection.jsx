"use client"
import React from 'react'

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Design enthusiast with 15+ years of experience in furniture industry"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Award-winning designer focused on sustainable furniture solutions"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Expert in logistics and supply chain optimization"
    },
    {
      id: 4,
      name: "David Park",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Innovative designer creating functional and beautiful furniture pieces"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to creating exceptional furniture and delivering outstanding customer experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden bg-gray-200 h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-amber-600 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-3.75 7.75-9 7.75c6 .13 9-5.87 9-5.87" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-colors duration-200"
                    aria-label="Email"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22 6 12 13 2 6" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
