
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

interface RequestAccessModalProps {
  onClose: () => void;
}

const RequestAccessModal: React.FC<RequestAccessModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `A user in the ${industry} industry is requesting access to egolab.ai (egocentric data for embodied AI). 
      Provide a professional, visionary, and concise 2-sentence confirmation message that acknowledges their specific field and mentions how EgoLab's industrial first-person video datasets are perfect for their needs. Keep the tone minimalist and elite.`;
      
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(res.text || "Your request is being processed. We'll be in touch.");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setResponse("Access request received. Our team will contact you shortly.");
      setSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-zinc-950 border border-zinc-800 w-full max-w-md p-10 rounded-lg shadow-2xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-600 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h2 className="text-xl font-bold mb-6 tracking-tight">Request Early Access</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Professional Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-2 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="name@company.ai"
                />
              </div>
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Target Domain / Industry</label>
                <input 
                  type="text" 
                  required
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-2 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="e.g. Warehousing, Medical, Manufacturing"
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-white text-black font-bold py-3 rounded mt-4 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest"
              >
                {isLoading ? 'Processing...' : 'Secure Access'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-bold mb-4">Request Logged</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              {response}
            </p>
            <button 
              onClick={onClose}
              className="text-zinc-500 hover:text-white text-xs uppercase tracking-widest underline decoration-zinc-700"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestAccessModal;
