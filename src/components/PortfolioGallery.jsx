import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      category: 'house',
      title: 'Monstera Deliciosa Collection',
      description: 'A stunning collection of Monstera plants showcasing their unique fenestrated leaves and vibrant green colors. Perfect for indoor tropical aesthetics.',
      images: [
        'https://images.unsplash.com/photo-1545241047-6083a3684587?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 2,
      category: 'house',
      title: 'Fiddle Leaf Fig Corner',
      description: 'Beautiful fiddle leaf fig plants arranged in a modern living space, bringing life and elegance to any interior design.',
      images: [
        'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1585288766827-c7f789c229e4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586105449897-20b5efeb3229?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 3,
      category: 'flowers',
      title: 'Rose Garden Paradise',
      description: 'Exquisite rose arrangements featuring deep reds, soft pinks, and pure whites. A celebration of romance and natural beauty.',
      images: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 4,
      category: 'flowers',
      title: 'Wildflower Meadow',
      description: 'A vibrant collection of wildflowers captured in their natural habitat, showcasing nature\'s diverse color palette.',
      images: [
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 5,
      category: 'photography',
      title: 'Urban Landscape Series',
      description: 'Modern cityscape photography capturing the essence of urban life, architecture, and the interplay of light and shadow.',
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 6,
      category: 'photography',
      title: 'Nature Macro Photography',
      description: 'Intimate close-up shots revealing the intricate details and hidden beauty of nature\'s smallest subjects.',
      images: [
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 7,
      category: 'house',
      title: 'Succulent Collection',
      description: 'Diverse array of succulents showcasing their unique shapes, textures, and low-maintenance beauty.',
      images: [
        'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542323503-33b3f85f7b37?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 8,
      category: 'flowers',
      title: 'Tulip Festival',
      description: 'Vibrant tulip displays in full bloom, featuring a rainbow of colors from soft pastels to bold primary hues.',
      images: [
        'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1523693916903-027d144a2fd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 9,
      category: 'photography',
      title: 'Sunset Silhouettes',
      description: 'Dramatic sunset photography capturing golden hour moments and the beauty of silhouetted landscapes.',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop'
      ]
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    // Prevent body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    // Re-enable body scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          My Portfolio
        </h2>
        <p className="text-gray-400 text-lg">Explore my creative journey</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { key: 'all', label: 'See All' },
          { key: 'house', label: 'House Plant' },
          { key: 'flowers', label: 'Flowers' },
          { key: 'photography', label: 'Photography' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab.key
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/50 scale-105'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:scale-105 border border-gray-700/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-purple-400">
                <span>{item.images.length} images</span>
                <span>•</span>
                <span className="capitalize">{item.category}</span>
              </div>
            </div>
            {/* Gradient overlay hint */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[85vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-110 group"
            >
              <X className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
              <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-8">
                {/* Left: Main Image */}
                <div className="lg:w-3/5 relative">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-700/30">
                    <img
                      src={selectedItem.images[currentImageIndex]}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation arrows */}
                    {selectedItem.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:scale-110 group"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:scale-110 group"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </button>
                      </>
                    )}

                    {/* Image counter */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-sm text-gray-300">
                      {currentImageIndex + 1} / {selectedItem.images.length}
                    </div>
                  </div>
                </div>

                {/* Right: Info and Thumbnails */}
                <div className="lg:w-2/5 flex flex-col">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {selectedItem.description}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold capitalize">
                      {selectedItem.category}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div>
                    <h4 className="text-sm font-bold text-purple-400 mb-3">Gallery</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedItem.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => selectImage(index)}
                          className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                            currentImageIndex === index
                              ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900 scale-95'
                              : 'hover:scale-105 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {currentImageIndex === index && (
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(31, 41, 55, 0.5);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #8b5cf6, #ec4899);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(to bottom, #a78bfa, #f472b6);
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;