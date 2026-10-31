import { useEffect, useRef, useState } from 'react';

export default function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const imageUrls = useRef([]);

  useEffect(() => {
    const urls = imageUrls.current;
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').trim();
    const description = formData.get('description').trim();
    const image = formData.get('image');

    if (!(image instanceof File) || image.size === 0) {
      setError('Please choose an image for this category.');
      return;
    }

    const imageUrl = URL.createObjectURL(image);
    imageUrls.current.push(imageUrl);
    setCategories((current) => [
      ...current,
      { id: crypto.randomUUID(), name, description, imageUrl },
    ]);
    event.currentTarget.reset();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Categories</h2>
        <p className="mt-1 text-sm text-slate-500">Create and manage your content categories.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
      >
        <div>
          <label htmlFor="category-name" className="mb-2 block text-sm font-medium text-slate-700">
            Category name
          </label>
          <input
            id="category-name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="e.g. Web design"
            className="w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        <div>
          <label htmlFor="category-image" className="mb-2 block text-sm font-medium text-slate-700">
            Category image
          </label>
          <input
            id="category-image"
            name="image"
            type="file"
            accept="image/*"
            required
            className="block w-full rounded-xl border border-slate-200 text-sm text-slate-600 file:mr-4 file:border-0 file:bg-indigo-50 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        <div>
          <label
            htmlFor="category-description"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Description
          </label>
          <textarea
            id="category-description"
            name="description"
            rows={4}
            required
            maxLength={500}
            placeholder="Describe this category"
            className="w-full resize-y rounded-xl border border-slate-200 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-rose-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
        >
          Add category
        </button>
      </form>

      {categories.length > 0 && (
        <section aria-label="Created categories" className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Created categories</h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={category.imageUrl}
                  alt=""
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900">{category.name}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
