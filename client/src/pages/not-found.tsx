import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

interface NotFoundProps {
  currentPath?: string;
  suggestions?: string[];
}

export default function NotFound({ currentPath, suggestions = [] }: NotFoundProps) {
  const [, setLocation] = useLocation();
  
  const handleSuggestionClick = (path: string) => {
    setLocation(path);
  };

  const handleGoHome = () => {
    setLocation("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            {currentPath 
              ? `Die angeforderte Seite "${currentPath}" existiert nicht.`
              : "Did you forget to add the page to the router?"
            }
          </p>
          {suggestions.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Meinten Sie vielleicht:
              </p>
              <div className="space-y-1">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="block w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mt-6 flex gap-2">
            <button 
              onClick={handleGoBack}
              className="flex-1 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Zurück
            </button>
            <button 
              onClick={handleGoHome}
              className="flex-1 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
            >
              Zur Startseite
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}