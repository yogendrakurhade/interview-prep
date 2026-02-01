import type { Diagram } from "../types";

interface DiagramDisplayProps {
  diagram: Diagram;
}

export function DiagramDisplay({ diagram }: DiagramDisplayProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-4">
      <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">{diagram.title}</h4>
      </div>
      <div className="p-6 bg-gray-50 flex justify-center">
        <img
          src={diagram.imageUrl}
          alt={diagram.title}
          className="max-w-full h-auto rounded-lg max-h-96 object-contain"
        />
      </div>
      {diagram.description && (
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <p className="text-sm text-gray-700 leading-relaxed">{diagram.description}</p>
        </div>
      )}
    </div>
  );
}
