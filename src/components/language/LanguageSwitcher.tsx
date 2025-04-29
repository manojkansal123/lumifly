
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-solar-dark dark:text-white">
          <Globe className="h-4 w-4 mr-1" />
          <span className="hidden md:inline text-inherit">{t("language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-gray-100" : ""}>
          {t("language.english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("od")} className={language === "od" ? "bg-gray-100" : ""}>
          {t("language.odia")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
