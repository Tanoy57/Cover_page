import Card from "../ui/Card";
import { templates, coverTypes } from "../../templates/templates";

export default function TemplateSelector({
  template,
  setTemplate,
  coverType,
  setCoverType,
  customTitle,
  setCustomTitle,
}) {
  return (
    <Card className="space-y-8 bg-white">

      {/* TEMPLATE STYLE */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 mb-3">
          Design Style
        </h2>

        <div className="flex flex-wrap gap-2">
          {templates.map((item) => {
            const active = template === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setTemplate(item.id)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium
                  border transition-all duration-200 active:scale-95

                  ${
                    active
                      ? "bg-orange-50 text-orange-600 border-orange-300"
                      : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50"
                  }
                `}
              >
                {active && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                )}

                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* COVER TYPE */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 mb-3">
          Cover Type
        </h2>

        <div className="flex flex-wrap gap-2">
          {coverTypes.map((item) => {
            const active = coverType === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setCoverType(item.id)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium
                  border transition-all duration-200 active:scale-95

                  ${
                    active
                      ? "bg-orange-50 text-orange-600 border-orange-300"
                      : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50"
                  }
                `}
              >
                {active && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                )}

                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* CUSTOM TITLE */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 mb-2">
          Custom Title
          <span className="text-xs text-gray-300 ml-1">(optional)</span>
        </h2>

        <input
          type="text"
          value={customTitle}
          onChange={(e) => setCustomTitle(e.target.value)}
          placeholder="AI Lab Report 2026"
          className="
            w-full px-4 py-3 rounded-md
            bg-white border border-gray-200
            text-gray-700 text-sm
            outline-none transition-all duration-200

            focus:border-orange-500
            focus:ring-2 focus:ring-orange-100
          "
        />
      </div>

    </Card>
  );
}