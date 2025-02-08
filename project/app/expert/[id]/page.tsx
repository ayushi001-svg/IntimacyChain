import ExpertProfile from "./expert-profile";

const experts = {
  1: {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialization: "Gynecologist",
    experience: "15+ years",
    languages: ["English", "Spanish"],
    rating: 4.9,
    price: 150,
    availability: "Mon-Fri",
    location: "New York, USA",
    bio: "Dr. Mitchell is a board-certified gynecologist with extensive experience in women's health. She specializes in reproductive health, family planning, and sexual wellness counseling.",
    education: [
      "MD from Johns Hopkins University",
      "Residency at Mayo Clinic",
      "Board Certified by American Board of Obstetrics and Gynecology"
    ],
    reviews: [
      {
        rating: 5,
        comment: "Very professional and understanding. Made me feel comfortable discussing sensitive topics.",
        date: "2 weeks ago"
      },
      {
        rating: 4.8,
        comment: "Excellent doctor, very knowledgeable and patient.",
        date: "1 month ago"
      }
    ]
  },
  2: {
    id: 2,
    name: "Dr. James Wilson",
    specialization: "Urologist",
    experience: "12+ years",
    languages: ["English", "French"],
    rating: 4.8,
    price: 140,
    availability: "Tue-Sat",
    location: "London, UK",
    bio: "Dr. Wilson is a leading urologist specializing in men's health issues. He has extensive experience in treating various urological conditions and sexual health concerns.",
    education: [
      "MBBS from Oxford University",
      "Fellowship at UCLA Medical Center",
      "Member of Royal College of Surgeons"
    ],
    reviews: [
      {
        rating: 4.9,
        comment: "Dr. Wilson is extremely professional and knowledgeable.",
        date: "1 week ago"
      },
      {
        rating: 4.7,
        comment: "Great experience, very thorough and caring.",
        date: "3 weeks ago"
      }
    ]
  },
  3: {
    id: 3,
    name: "Dr. Emily Chen",
    specialization: "Sexual Health Therapist",
    experience: "10+ years",
    languages: ["English", "Mandarin"],
    rating: 4.7,
    price: 120,
    availability: "Mon-Thu",
    location: "Singapore",
    bio: "Dr. Chen is a certified sexual health therapist with a focus on holistic wellness. She specializes in relationship counseling and sexual wellness therapy.",
    education: [
      "PhD in Clinical Psychology from Stanford",
      "Certified Sex Therapist",
      "Member of World Association for Sexual Health"
    ],
    reviews: [
      {
        rating: 4.8,
        comment: "Dr. Chen is amazing at making you feel comfortable.",
        date: "5 days ago"
      },
      {
        rating: 4.6,
        comment: "Very helpful and insightful sessions.",
        date: "2 weeks ago"
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(experts).map((id) => ({
    id: id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const expert = experts[params.id as keyof typeof experts];
  
  if (!expert) {
    return <div>Expert not found</div>;
  }

  return <ExpertProfile expert={expert} />;
}