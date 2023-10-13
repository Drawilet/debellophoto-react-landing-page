import React, { useState } from "react";

export default () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleDismiss = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center z-20">
          <div className="container mx-auto ">
            <div className="flex justify-between items-center flex-col md:flex-row">
              <div>
                This is an example page. Feel free to customize it for your own
                use.
              </div>
              <button
                onClick={handleDismiss}
                className="bg-white text-black py-1 px-4 rounded hover:underline mt-2 md:mt-0"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
