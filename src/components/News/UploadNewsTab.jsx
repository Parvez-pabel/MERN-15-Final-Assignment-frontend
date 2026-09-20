import React, { useState, useEffect } from "react";
import { useCategoryStore } from "../../store/useCategoryStore";

const UploadNewsTab = () => {
  const { categories, fetchAllCategories } = useCategoryStore();
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    location: "",
    image: "",
    details: "",
  });

  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted News Data:", formData);
    // Call Create News Action Here
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-6">Upload New Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label font-medium">News Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter article title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-medium">Category</label>
            <select
              name="categoryId"
              required
              value={formData.categoryId}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="">Select Category</option>
              {categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Dhaka, Bangladesh"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            required
            placeholder="https://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label font-medium">News Details</label>
          <textarea
            name="details"
            required
            rows="6"
            placeholder="Write news content here..."
            value={formData.details}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Publish News
        </button>
      </form>
    </div>
  );
};

export default UploadNewsTab;
