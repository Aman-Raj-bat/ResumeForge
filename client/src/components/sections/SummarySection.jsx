const SummarySection = ({ register }) => {
  return (
    <div className="bg-surface p-6 rounded-lg border border-border-main mb-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Professional Summary</h3>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Summary</label>
        <textarea 
          rows="4"
          className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none resize-y"
          placeholder="A brief summary of your professional background and goals."
          {...register('summary')} 
        />
      </div>
    </div>
  );
};

export default SummarySection;
