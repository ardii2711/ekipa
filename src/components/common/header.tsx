import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
            <Monitor className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">eKIPA</h1>
            <p className="text-xs text-gray-600">Dinas Kominfo Mamuju Tengah</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Fitur
          </Link>
          <Link to="#benefits" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Keunggulan
          </Link>
          <Link to="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Kontak
          </Link>
          <Link to="/auth/login" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">Masuk Aplikasi</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
