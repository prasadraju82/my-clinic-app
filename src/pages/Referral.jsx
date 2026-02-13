import { useMemo, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiStar,
  FiUser,
  FiUserCheck,
  FiX
} from "react-icons/fi";
import "./Referral.css";

const initialDoctors = [
  {
    id: 1,
    name: "Dr. Rakesh Mehta",
    speciality: "Ophthalmology",
    status: "Active",
    mobile: "+91 98765 33210",
    rating: 4.8,
    referrals: 128
  },
  {
    id: 2,
    name: "Dr. Aditi Kapoor",
    speciality: "Retina",
    status: "Active",
    mobile: "+91 99810 44126",
    rating: 4.7,
    referrals: 103
  },
  {
    id: 3,
    name: "Dr. Omar Siddiqui",
    speciality: "Glaucoma",
    status: "Inactive",
    mobile: "+971 50 772 1832",
    rating: 4.5,
    referrals: 82
  },
  {
    id: 4,
    name: "Dr. Emma Clarke",
    speciality: "Cornea",
    status: "Active",
    mobile: "+44 7700 900231",
    rating: 4.6,
    referrals: 66
  },
  {
    id: 5,
    name: "Dr. Karan Arora",
    speciality: "Ophthalmology",
    status: "Active",
    mobile: "+91 98111 55704",
    rating: 4.9,
    referrals: 141
  }
];

const specialityOptions = [
  "Select",
  "Ophthalmology",
  "Retina",
  "Glaucoma",
  "Cornea",
  "Cataract"
];

export default function Referral() {
  const [filters, setFilters] = useState({
    search: "",
    speciality: "Select",
    status: "Active"
  });
  const [doctors, setDoctors] = useState(initialDoctors);
  const [team, setTeam] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    speciality: "Ophthalmology",
    mobile: "",
    status: "Active"
  });

  const filteredTeam = useMemo(() => {
    return team.filter((doctor) => {
      const q = filters.search.trim().toLowerCase();
      const matchesSearch =
        q.length === 0 || doctor.name.toLowerCase().includes(q) || doctor.mobile.toLowerCase().includes(q);
      const matchesSpeciality =
        filters.speciality === "Select" || doctor.speciality === filters.speciality;
      const matchesStatus = doctor.status === filters.status;
      return matchesSearch && matchesSpeciality && matchesStatus;
    });
  }, [team, filters]);

  const smartSuggestions = useMemo(() => {
    const teamIds = new Set(team.map((d) => d.id));
    return doctors
      .filter((d) => !teamIds.has(d.id) && d.status === "Active")
      .sort((a, b) => b.rating - a.rating || b.referrals - a.referrals)
      .slice(0, 4);
  }, [doctors, team]);

  const addDoctorToTeam = (doctor) => {
    setTeam((prev) => {
      if (prev.some((d) => d.id === doctor.id)) return prev;
      return [...prev, doctor];
    });
  };

  const handleCreateDoctor = () => {
    if (!newDoctor.name.trim() || !newDoctor.mobile.trim()) return;
    const created = {
      id: Date.now(),
      name: newDoctor.name.trim(),
      speciality: newDoctor.speciality,
      mobile: newDoctor.mobile.trim(),
      status: newDoctor.status,
      rating: 4.2,
      referrals: 0
    };
    setDoctors((prev) => [created, ...prev]);
    if (created.status === "Active") {
      setTeam((prev) => [created, ...prev]);
    }
    setShowModal(false);
    setNewDoctor({ name: "", speciality: "Ophthalmology", mobile: "", status: "Active" });
  };

  return (
    <div className="ref-page">
      <div className="ref-filter-row">
        <label>
          Doctor Search
          <div className="ref-search-input">
            <input
              placeholder="Search"
              value={filters.search}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, search: event.target.value }))
              }
            />
            <FiSearch />
          </div>
        </label>

        <label>
          Speciality
          <select
            value={filters.speciality}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, speciality: event.target.value }))
            }
          >
            {specialityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select
            value={filters.status}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, status: event.target.value }))
            }
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </label>

        <button type="button" className="ref-add-btn" onClick={() => setShowModal(true)}>
          <FiPlus /> Add Doctor
        </button>
      </div>

      <div className="ref-feature-strip">
        <div className="ref-stat">
          <span>Total Care Team</span>
          <strong>{team.length}</strong>
        </div>
        <div className="ref-stat">
          <span>Active Doctors</span>
          <strong>{doctors.filter((d) => d.status === "Active").length}</strong>
        </div>
        <div className="ref-stat">
          <span>Avg Rating</span>
          <strong>
            {(
              doctors.reduce((sum, d) => sum + d.rating, 0) / (doctors.length || 1)
            ).toFixed(1)}
          </strong>
        </div>
        <div className="ref-tip">
          <FiStar /> Smart Match suggests high-performing active doctors for quick addition.
        </div>
      </div>

      <div className="ref-care-card">
        <div className="ref-care-head">Care Team</div>
        <div className="ref-care-body">
          {filteredTeam.length === 0 ? (
            <div className="ref-empty">
              <div className="ref-empty-icon">
                <FiUserCheck />
              </div>
              <h4>No results Found</h4>
              <p>Try using a different criteria to view better results.</p>
            </div>
          ) : (
            <div className="ref-team-grid">
              {filteredTeam.map((doctor) => (
                <article key={doctor.id} className="ref-team-card">
                  <div className="ref-avatar">
                    <FiUser />
                  </div>
                  <div>
                    <h4>{doctor.name}</h4>
                    <p>{doctor.speciality}</p>
                    <p>{doctor.mobile}</p>
                    <div className="ref-meta">
                      <span>
                        <FiStar /> {doctor.rating}
                      </span>
                      <span>{doctor.referrals} referrals</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="ref-suggest-card">
        <div className="ref-care-head">Smart Suggestions</div>
        <div className="ref-suggest-grid">
          {smartSuggestions.map((doctor) => (
            <article key={doctor.id} className="ref-suggest-item">
              <div>
                <h5>{doctor.name}</h5>
                <p>{doctor.speciality}</p>
                <p>{doctor.mobile}</p>
              </div>
              <div className="ref-suggest-actions">
                <span>
                  <FiStar /> {doctor.rating}
                </span>
                <button type="button" onClick={() => addDoctorToTeam(doctor)}>
                  Quick Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="ref-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="ref-modal" onClick={(event) => event.stopPropagation()}>
            <div className="ref-modal-head">
              <h3>Add Doctor</h3>
              <button type="button" onClick={() => setShowModal(false)}>
                <FiX />
              </button>
            </div>
            <div className="ref-modal-form">
              <label>
                Doctor Name
                <input
                  value={newDoctor.name}
                  onChange={(event) =>
                    setNewDoctor((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="Dr. Name"
                />
              </label>
              <label>
                Speciality
                <select
                  value={newDoctor.speciality}
                  onChange={(event) =>
                    setNewDoctor((prev) => ({ ...prev, speciality: event.target.value }))
                  }
                >
                  {specialityOptions
                    .filter((option) => option !== "Select")
                    .map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                </select>
              </label>
              <label>
                Mobile
                <input
                  value={newDoctor.mobile}
                  onChange={(event) =>
                    setNewDoctor((prev) => ({ ...prev, mobile: event.target.value }))
                  }
                  placeholder="+91..."
                />
              </label>
              <label>
                Status
                <select
                  value={newDoctor.status}
                  onChange={(event) =>
                    setNewDoctor((prev) => ({ ...prev, status: event.target.value }))
                  }
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </label>
            </div>
            <div className="ref-modal-actions">
              <button type="button" className="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button type="button" className="primary" onClick={handleCreateDoctor}>
                Save Doctor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
