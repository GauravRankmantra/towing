"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import ContactTable from "@/components/admin/ContactTable";
import {
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
  Loader,
  LocateFixed,
} from "lucide-react";
import axios from "axios";

const mockContacts = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    zipCode: "90210",
    message:
      "I need emergency towing service for my car that broke down on Highway 405. The engine is smoking and I cannot drive it safely.",
    submittedAt: "2024-01-15T14:30:00Z",
    status: "pending",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@gmail.com",
    phone: "(555) 987-6543",
    zipCode: "10001",
    message:
      "Looking for a reliable towing company for my business. We run a small auto repair shop and need occasional towing services.",
    submittedAt: "2024-01-14T09:15:00Z",
    status: "handled",
  },
  {
    id: 3,
    name: "Mike Davis",
    email: "mike.davis@outlook.com",
    zipCode: "60601",
    message:
      "Car accident on Michigan Avenue. Need immediate towing and the police are already on scene. Please respond ASAP.",
    submittedAt: "2024-01-15T16:45:00Z",
    status: "urgent",
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily.wilson@yahoo.com",
    phone: "(555) 456-7890",
    zipCode: "90211",
    message:
      "My car won't start in the parking garage. I think it's the battery but I'm not sure. Can someone come take a look?",
    submittedAt: "2024-01-13T11:20:00Z",
    status: "pending",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "rbrown@email.com",
    phone: "(555) 234-5678",
    zipCode: "10002",
    message:
      "Need to tow my motorcycle from Brooklyn to Manhattan. It's a Harley Davidson and needs special handling.",
    submittedAt: "2024-01-12T15:30:00Z",
    status: "handled",
  },
];

export default function Contacts() {
  const [contacts, setContacts] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleted, setdeleted] = useState(null);

  const fetchContact = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://towing-backend.onrender.com/api/v1/contact"
      );
      if (res) setContacts(res.data.data);
      else toast.error("error while fetching the contact details ");
    } catch (error) {
      toast.error("error while fetching the contact details ");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchContact();
  }, []);

  const handleDeleteModel = (id) => {
    setDeleteModel(true);
    setDeleteId(id);
  };
  const handleUpdateStatus = (contactId, newStatus) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === contactId ? { ...contact, status: newStatus } : contact
      )
    );

    const statusMessages = {
      pending: "Contact marked as pending",
      handled: "Contact marked as handled",
      urgent: "Contact marked as urgent",
    };

    toast.success(statusMessages[newStatus]);
  };

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
    setShowDetails(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      const res = await axios.delete(
        `https://towing-backend.onrender.com/api/v1/contact/${deleteId}`
      );
      if (res.data.statusCode == 200) toast.success("Deleted successfully");
      fetchContact();
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteModel(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading)
    return (
      <div>
        <Loader className="animate-spin w-10 mx-auto my-auto" />
      </div>
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Contact Inquiries
          </h1>
          <p className="text-gray-600 mt-1">
            Manage and respond to customer contact requests
          </p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Total: {contacts?.length} inquiries</span>
        </div>
      </motion.div>

      {/* Contact Table */}
      {contacts?.length > 0 ? (
        <ContactTable
          contacts={contacts}
          onUpdateStatus={handleUpdateStatus}
          onViewDetails={handleViewDetails}
          onDelete={handleDeleteModel}
        />
      ) : (
        <div>
          <h1 className="text-center text-xl mt-10">
            No Contact Inquiries available !
          </h1>
        </div>
      )}

      {/* Contact Details Modal */}
      <AnimatePresence>
        {showDetails && selectedContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Contact Details
                </h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {selectedContact.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedContact.email}
                        </p>
                      </div>
                    </div>

                    {selectedContact.phone && (
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Phone
                          </p>
                          <p className="text-sm text-gray-600">
                            {selectedContact.phone}
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedContact.zip && (
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Zip Code
                          </p>
                          <p className="text-sm text-gray-600">
                            {selectedContact.zip}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Submitted
                        </p>
                        <p className="text-sm text-gray-600">
                          {formatDate(selectedContact.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <LocateFixed className="w-4 h-4 mr-2" />
                    Address
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedContact?.address}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Status & Actions
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Status
                      </label>
                      <select
                        value={selectedContact.status}
                        onChange={(e) => {
                          handleUpdateStatus(selectedContact.id, e.target.value);
                          setSelectedContact(prev => ({ ...prev, status: e.target.value }));
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="pending">Pending</option>
                        <option value="handled">Handled</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div> */}

                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={`mailto:${selectedContact.email}?subject=Re: Your Towing Service Inquiry`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Reply via Email</span>
                      </a>

                      {selectedContact.phone && (
                        <a
                          href={`tel:${selectedContact.phone}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* delete Details Modal */}
      <AnimatePresence>
        {deleteModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setDeleteModel(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-center font-semibold text-gray-900">
                  Are you sure to Delete this info ?
                </h2>
                <button
                  onClick={() => setDeleteModel(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex mt-10 gap-3 ">
                <button
                  onClick={handleDeleteConfirm}
                  className="bg-red-500 rounded-md hover:bg-red-600 px-2 py-1 text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteModel(false)}
                  className=" px-2 py-1 rounded-md bg-gray-300"
                >
                  Canel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
