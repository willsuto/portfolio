import React from 'react';

function ContactCard() {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-lg font-bold mb-4">Contact</h2>
      <ul>
        <li className="text-gray-700 mb-2">Email: <a href="mailto:will.suto@gmail.com" className="text-blue-500 hover:underline">will.suto@gmail.com</a></li>
        <li className="text-gray-700">
          <a href="http://linkedin.com/in/willsuto" className="text-blue-500 hover:underline">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactCard;
