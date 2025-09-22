import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interestedGame: string;
  notes: string;
}

export default function PreRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    interestedGame: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: result.message || 'Thank you! You have been successfully registered.' });
        setFormData({ firstName: '', lastName: '', email: '', interestedGame: '', notes: '' });
      } else {
        setMessage({ type: 'error', text: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 py-16">
      <form 
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl rounded-2xl bg-white/5 p-6" 
        aria-label="Pre-registration form"
      >
        <h3 className="text-center">Pre-registration</h3>
        
        {message && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            message.type === 'success' 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {message.text}
          </div>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-white/70">First name</span>
            <input 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50" 
              placeholder="Jane"
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-white/70">Last name</span>
            <input 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50" 
              placeholder="Doe"
              required
            />
          </label>
          <label className="md:col-span-2 flex flex-col gap-1">
            <span className="text-sm text-white/70">Email</span>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50" 
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="md:col-span-2 flex flex-col gap-1">
            <span className="text-sm text-white/70">Interested Game</span>
            <select 
              name="interestedGame"
              value={formData.interestedGame}
              onChange={handleInputChange}
              className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary text-white" 
              required
            >
              <option value="" className="bg-gray-800 text-white">Select a game...</option>
              <option value="Boss Fighters" className="bg-gray-800 text-white">Boss Fighters</option>
              <option value="Cubox.io" className="bg-gray-800 text-white">Cubox.io</option>
              <option value="Kingless Land" className="bg-gray-800 text-white">Kingless Land</option>
            </select>
          </label>
          <label className="md:col-span-2 flex flex-col gap-1">
            <span className="text-sm text-white/70">Notes (Optional)</span>
            <textarea 
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50 resize-none" 
              placeholder="Tell us more about your interests, questions, or any additional information..."
              rows={3}
            />
          </label>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`mt-6 w-full rounded-full px-6 py-3 font-medium transition-colors ${
            isSubmitting 
              ? 'bg-white/5 cursor-not-allowed' 
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Join the waitlist'}
        </button>
      </form>
    </section>
  );
}
