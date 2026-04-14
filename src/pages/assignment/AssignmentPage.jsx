import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud } from 'lucide-react';
import { assignmentService } from '../../services/assignment';

const Assignments = () => {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const [assignments, setAssignments] = useState([]);
  const [summary, setSummary] = useState({
    total: 0,
    submitted: 0,
    pending: 0,
  });
  const [loading, setLoading] = useState(true);

  const openSubmitModal = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmitModal(true);
  };

  useEffect(() => {
  const fetchAssignments = async () => {
    try {
      const data = await assignmentService.getAssignments();

      console.log('Assignments API Response:', data);

      setAssignments(data.assignments || []);

      setSummary(
        data.summary || {
          total: 0,
          submitted: 0,
          pending: 0,
        }
      );
    } catch (err) {
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchAssignments();
}, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Top Bar */}
      <div className='bg-[#F9FAFB] h-16 sm:h-20 border-b border-gray-200'></div>

      <div className='p-4 sm:p-6 lg:p-8'>
        {/* Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 mt-4'>
          <div className='bg-[#F3FDF8] rounded-lg p-5 border border-gray-200'>
            <p className='text-sm text-gray-600'>Total Assignments</p>
            <p className='text-lg font-semibold text-gray-800'>
              {summary.total}
            </p>
          </div>

          <div className='bg-[#F3FDF8] rounded-lg p-5 border border-gray-200'>
            <p className='text-sm text-gray-600'>Assignments Completed</p>
            <p className='text-lg font-semibold text-gray-800'>
              {summary.submitted}
            </p>
          </div>

          <div className='bg-[#F3FDF8] rounded-lg p-5 border border-gray-200'>
            <p className='text-sm text-gray-600'>Assignments Pending</p>
            <p className='text-lg font-semibold text-gray-800'>
              {summary.pending}
            </p>
          </div>
        </div>

        {/* DESKTOP TABLE */}
        <div className='hidden md:block bg-white border border-gray-300 overflow-x-auto rounded-lg'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='text-gray-600 border-b'>
                <th className='text-left px-6 py-4'>Lesson title</th>
                <th className='text-left px-6 py-4'>Status</th>
                <th className='text-left px-6 py-4'>Due date</th>
                <th className='text-left px-6 py-4'>Assignment</th>
                <th className='px-6 py-4'></th>
              </tr>
            </thead>

            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id} className='border-b'>
                  <td className='px-6 py-4 text-gray-700'>
                    {assignment.lessonTitle}
                  </td>

                  <td className='px-6 py-4 text-gray-600'>
                    {assignment.status}
                  </td>

                  <td className='px-6 py-4 text-gray-600'>
                    {assignment.dueDate}
                  </td>

                  <td className='px-6 py-4 text-gray-600'>
                    {assignment.description}
                  </td>

                  <td className='px-6 py-4'>
                    {assignment.status === 'pending' ? (
                      <button
                        onClick={() => openSubmitModal(assignment)}
                        className='bg-button-primary hover:bg-[#365246] text-white px-4 py-2 rounded-md text-xs'
                      >
                        Submit Assignment
                      </button>
                    ) : (
                      <button className='bg-gray-300 text-gray-600 px-4 py-2 rounded-md text-xs cursor-default'>
                        Assignment Submitted
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE */}
        <div className='md:hidden space-y-4'>
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className='bg-white border border-gray-200 rounded-xl p-4 shadow-sm'
            >
              <h3 className='text-sm font-semibold text-gray-800 mb-2'>
                {assignment.lessonTitle}
              </h3>

              <p className='text-xs text-gray-600 mb-3'>
                {assignment.description}
              </p>

              <div className='flex justify-between text-xs text-gray-500 mb-3'>
                <span>{assignment.dueDate}</span>
                <span
                  className={`px-2 py-1 rounded-full text-[10px] ${
                    assignment.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {assignment.status}
                </span>
              </div>

              {assignment.status === 'pending' ? (
                <button
                  onClick={() => openSubmitModal(assignment)}
                  className='w-full bg-button-primary text-white py-2 rounded-md text-xs'
                >
                  Submit Assignment
                </button>
              ) : (
                <button className='w-full bg-gray-300 text-gray-600 py-2 rounded-md text-xs'>
                  Assignment Submitted
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showSubmitModal && selectedAssignment && (
        <Modal
          assignment={selectedAssignment}
          setShowSubmitModal={setShowSubmitModal}
        />
      )}
    </div>
  );
};

export default Assignments;





// ================= MODAL =================

const Modal = ({ setShowSubmitModal, assignment }) => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const fileRef = useRef();

  const handleFile = (f) => {
    if (!f) return;

    const valid = ['application/pdf', 'image/png', 'image/jpeg'];
    if (!valid.includes(f.type)) {
      alert('Only PDF, PNG, JPEG allowed');
      return;
    }

    if (f.size > 12 * 1024 * 1024) {
      alert('Max file size is 12MB');
      return;
    }

    setFile(f);
  };

  const handleSubmit = async () => {
    try {
      const res = await assignmentService.submitAssignment(
        assignment.id,
        { link, file }
      );

      alert(res.message);
      setShowSubmitModal(false);
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2'>
      <div className='bg-white w-full max-w-lg rounded-2xl shadow-xl p-6'>
        <div className='flex justify-between mb-4'>
          <h3 className='text-lg font-semibold'>Submit Assignment</h3>
          <button onClick={() => setShowSubmitModal(false)}>✕</button>
        </div>

        <p className='text-sm text-gray-500 mb-4'>
          {assignment.lessonTitle}
        </p>

        {/* Link */}
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder='Paste link'
          className='w-full mb-4 p-3 border rounded-lg'
        />

        {/* Upload */}
        <div
          onClick={() => fileRef.current.click()}
          className='border rounded-lg p-6 text-center cursor-pointer'
        >
          <UploadCloud className='mx-auto mb-2' />
          {file ? file.name : 'Click to upload file'}
        </div>

        <input
          type='file'
          hidden
          ref={fileRef}
          onChange={(e) => handleFile(e.target.files[0])}
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className='w-full mt-4 bg-button-primary text-white py-2 rounded-lg'
        >
          Submit Assignment
        </button>
      </div>
    </div>
  );
};