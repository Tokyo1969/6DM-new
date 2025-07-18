import React from 'react'

const Gallery = () => (
  <section className="p-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <h2 className="col-span-full text-2xl text-gold mb-4">Gallery</h2>
    <img src="https://via.placeholder.com/300x200" alt="Gallery 1" className="rounded" />
    <img src="https://via.placeholder.com/300x200" alt="Gallery 2" className="rounded" />
    <img src="https://via.placeholder.com/300x200" alt="Gallery 3" className="rounded" />
  </section>
)

export default Gallery