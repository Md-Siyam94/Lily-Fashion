
import Link from 'next/link';
import { BiCalendar, BiPhone } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';



const Footer = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'Importance of Arts Integrating',
      date: '20 April, 2024',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Development Student Best Achievement',
      date: '20 April, 2024',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Resource Center', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Instructor', href: '#' },
    { label: 'Become A Teacher', href: '#' },
  ];

  const usefulLinks = [
    { label: 'All Courses', href: '#' },
    { label: 'Digital Marketing', href: '#' },
    { label: 'Design & Branding', href: '#' },
    { label: 'Storytelling & Voice Over', href: '#' },
    { label: 'News & Blogs', href: '#' },
  ];
  return (
    <footer className="bg-gradient-to-r from-[#163634] to-[#192A29] text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
           <Link href={"/"} className="btn btn-ghost text-2xl font-semibold">
           {/* <img className='h-36 w-36 object-cover' src={EduBeeLogo} alt="EduBee Logo" /> */}
           </Link>
           
            <div className="space-y-3 mt-10 mb-6">
              <a href="tel:(702) 123-1478" className="flex items-center gap-3 text-2xl font-semibold text-white hover:text-teal-400 transition-colors">
                <BiPhone className="w-5 h-5 flex-shrink-0" />
                <span>+880 1789478967</span>
              </a>
              <a href="mailto:info@company.com" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
                <CgMail className="w-5 h-5 flex-shrink-0" />
                <span>siyam942404@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase">Company Info</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <BsArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 text-gray-400 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase">Useful Links</h4>
            <ul className="space-y-4">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <BsArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase">Recent Post</h4>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <a key={post.id} href="#" className="flex gap-3 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <BiCalendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025 EdCore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;