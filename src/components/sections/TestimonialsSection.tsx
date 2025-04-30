
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    text: "I've been saving about $70 every month since joining SunnyFree's community solar program. The 150 free units cover most of my apartment's electricity needs. It's fantastic to save money while knowing I'm using clean energy!"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Boston, MA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    text: "As a homeowner concerned about climate change, SunnyFree was exactly what I was looking for. I get free power, don't need to install anything on my roof, and I'm helping reduce carbon emissions. The signup process was incredibly simple!"
  },
  {
    id: 3,
    name: "Tasha Williams",
    location: "Portland, OR",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    text: "I rent my apartment so installing solar panels wasn't an option for me. SunnyFree has been perfect - I get clean energy credits and my electric bill has gone down significantly. Customer service has been excellent whenever I've had questions."
  },
  {
    id: 4,
    name: "Robert Patel",
    location: "Denver, CO",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    text: "My family of four was spending a fortune on electricity. With SunnyFree's community solar, our first 150 units are completely free, and we're saving nearly $100 each month. It's made a real difference in our monthly budget."
  },
  {
    id: 5,
    name: "Jennifer Martinez",
    location: "Austin, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    text: "I love telling people about how I get free solar energy! The enrollment was so easy, and I didn't have to change anything about my home. My bills are lower, and I feel good about reducing my environmental impact."
  },
  {
    id: 6,
    name: "David Wilson",
    location: "Chicago, IL",
    rating: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    text: "As a small business owner, every dollar counts. SunnyFree's program has helped me reduce overhead costs without any upfront investment. The free units make a noticeable difference, and the whole process has been hassle-free."
  }
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);

  const nextSlide = () => {
    if (activeIndex < testimonials.length - 3) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(testimonials.length - 3);
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">{t("testimonials.title")}</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${i < testimonial.rating ? 'text-solar-yellow fill-solar-yellow' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                
                {/* Customer Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-solar-dark">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevSlide} 
              className="rounded-full hover:bg-solar-yellow/10"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextSlide} 
              className="rounded-full hover:bg-solar-yellow/10"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
