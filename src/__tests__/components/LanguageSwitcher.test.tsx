// import { describe, it, expect } from 'vitest';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import LanguageSwitcher from '@src/app/components/LanguageSwitcher';
// import { ELanguages } from '@src/i18n/intl';
// import { guiReducer } from '@src/store/gui';

// // Mock store setup
// const createTestStore = (initialLang = ELanguages.EN) => configureStore({
//     reducer: {
//       gui: guiReducer,
//     },
//     preloadedState: {
//       gui: {
//         lang: initialLang,
//       },
//     },
//   });

// // Test wrapper component
// const renderWithStore = (component: React.ReactNode, store = createTestStore()) => render(
//     <Provider store={store}>
//       {component}
//     </Provider>
//   );

// describe('LanguageSwitcher', () => {
//   it('renders with initial language', () => {
//     renderWithStore(<LanguageSwitcher />);

//     // Check if button exists with correct initial language
//     const button = screen.getByRole('button');
//     expect(button).toBeInTheDocument();
//     expect(button).toHaveTextContent('EN');
//   });

//   it('displays globe icon', () => {
//     renderWithStore(<LanguageSwitcher />);

//     // Check if globe icon exists
//     const globeIcon = document.querySelector('.lucide-globe');
//     expect(globeIcon).toBeInTheDocument();
//   });

//   it('opens dropdown menu when clicked', async () => {
//     renderWithStore(<LanguageSwitcher />);

//     // Click the button to open dropdown
//     const button = screen.getByRole('button');
//     fireEvent.click(button);

//     // Check if dropdown content is visible
//     const dropdownContent = screen.getByRole('presentation');
//     expect(dropdownContent).toBeInTheDocument();
//   });

//   it('shows all language options', async () => {
//     renderWithStore(<LanguageSwitcher />);

//     // Open dropdown
//     const button = screen.getByRole('button');
//     fireEvent.click(button);

//     // Check if all language options are present
//     Object.values(ELanguages).forEach(lang => {
//       expect(screen.getByText(lang.toUpperCase())).toBeInTheDocument();
//     });
//   });

//   it('changes language when option is selected', async () => {
//     const store = createTestStore();
//     renderWithStore(<LanguageSwitcher />, store);

//     // Open dropdown
//     const button = screen.getByRole('button');
//     fireEvent.click(button);

//     // Select a different language
//     const spanishOption = screen.getByText('ES');
//     fireEvent.click(spanishOption);

//     // Check if store was updated
//     expect(store.getState().gui.lang).toBe(ELanguages.ES);
//   });

//   it('highlights currently selected language', () => {
//     const store = createTestStore(ELanguages.ES);
//     renderWithStore(<LanguageSwitcher />, store);

//     // Check if button shows correct language
//     const button = screen.getByRole('button');
//     expect(button).toHaveTextContent('ES');
//   });

//   it('closes dropdown after selecting language', async () => {
//     renderWithStore(<LanguageSwitcher />);

//     // Open dropdown
//     const button = screen.getByRole('button');
//     fireEvent.click(button);

//     // Select a language
//     const spanishOption = screen.getByText('ES');
//     fireEvent.click(spanishOption);

//     // Check if dropdown is closed
//     const dropdownContent = screen.queryByRole('presentation');
//     expect(dropdownContent).not.toBeVisible();
//   });
// });
