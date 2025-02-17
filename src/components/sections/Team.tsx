import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      imageUrl: "/path/to/image.jpg",
      description: "John is the visionary behind our company, leading with passion and dedication.",
      socials: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imageUrl: "/path/to/image.jpg",
      description: "Jane is the tech guru, ensuring our solutions are cutting-edge and efficient.",
      socials: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Mark Johnson",
      role: "COO",
      imageUrl: "/path/to/image.jpg",
      description: "Mark keeps the operations smooth and customers satisfied.",
      socials: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-muted/50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our dedicated team of professionals working to bring the best solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white">{member.name}</h3>
              <p className="text-muted-foreground dark:text-gray-400">{member.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{member.description}</p>
              <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={member.socials.linkedin} className="text-blue-600 hover:text-blue-800"><FaLinkedin size={20} /></a>
                <a href={member.socials.twitter} className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
                <a href={member.socials.facebook} className="text-blue-700 hover:text-blue-900"><FaFacebook size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
