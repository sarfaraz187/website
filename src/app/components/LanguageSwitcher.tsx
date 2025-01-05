import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@src/app/components/ui/dropdown-menu";
import { ELanguages } from "@src/i18n/intl";
import { useAppDispatch, useAppSelector } from "@src/store";
import { guiActions, guiSelectors } from "@src/store/gui";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(guiSelectors.lang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 items-center cursor-pointer">
          <Globe className="w-4 h-4" />
          <span>{selectedLanguage.toUpperCase()}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={selectedLanguage}
          onValueChange={(lang) => dispatch(guiActions.setLang(lang))}
        >
          {Object.values(ELanguages).map((lang) => (
            <DropdownMenuRadioItem key={lang} value={lang}>
              {lang.toUpperCase()}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
