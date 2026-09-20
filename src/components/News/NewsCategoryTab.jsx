import React, { useState, useEffect } from "react";
import { useCategoryStore } from "../../store/useCategoryStore";

const NewsCategoryTab = () => {
  const { categories, fetchAllCategories } = useCategoryStore();
  const [newCat, setNewCat] = useState("");

  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  const handleAddCategory = (e) => {
    e.preventDefault();
    console.log("Add Category:", newCat);
    setNewCat("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Create Category Form */}
      <div className="bg-base-200 p-4 rounded-xl">
        <h3 className="text-lg font-bold mb-4">Add Category</h3>
        <form onSubmit={handleAddCategory} className="space-y-4">
          <input
            type="text"
            placeholder="Category Name"
            value={newCat}
            onChange={(e) => setNewCat(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Save
          </button>
        </form>
      </div>

      {/* Category List */}
      <div className="md:col-span-2">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((cat, idx) => (
                <tr key={cat._id}>
                  <th>{idx + 1}</th>
                  <td className="font-medium">{cat.name}</td>
                  <td>
                    <button className="btn btn-error btn-xs text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryTab;
