document.addEventListener("DOMContentLoaded", () => {
  const btnUserRole = document.getElementById("btnUserRole");
  const btnAdminRole = document.getElementById("btnAdminRole");
  const selectedRoleInput = document.getElementById("selectedRole");
  const submitAuthBtn = document.getElementById("submitAuthBtn");
  const authForm = document.getElementById("authForm");

  const adminModal = document.getElementById("adminModal");
  const adminModalCard = document.getElementById("adminModalCard");
  const btnCancelModal = document.getElementById("btnCancelModal");
  const btnOkModal = document.getElementById("btnOkModal");

  const successModal = document.getElementById("successModal");
  const successModalCard = document.getElementById("successModalCard");
  const btnCloseSuccessModal = document.getElementById("btnCloseSuccessModal");
  const btnGoToProducts = document.getElementById("btnGoToProducts");

  if (!btnUserRole || !btnAdminRole || !selectedRoleInput || !submitAuthBtn || !authForm) {
    return;
  }

  function updateRoleUI(role) {
    selectedRoleInput.value = role;

    if (role === "admin") {
      btnAdminRole.className = "w-1/2 py-2 text-sm font-semibold rounded-lg bg-white text-slate-900 shadow-sm transition-all";
      btnUserRole.className = "w-1/2 py-2 text-sm font-semibold rounded-lg text-slate-300 hover:text-white transition-all";
      submitAuthBtn.textContent = "Sign In as Admin";
      submitAuthBtn.className = "w-full py-3 bg-red-600 hover:bg-red-500 text-white font-medium text-sm rounded-lg transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none shadow-sm";
    } else {
      btnUserRole.className = "w-1/2 py-2 text-sm font-semibold rounded-lg bg-white text-slate-900 shadow-sm transition-all";
      btnAdminRole.className = "w-1/2 py-2 text-sm font-semibold rounded-lg text-slate-300 hover:text-white transition-all";
      submitAuthBtn.textContent = "Sign In as User";
      submitAuthBtn.className = "w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none shadow-sm";
    }
  }

  function openModal(modal, modalCard) {
    if (!modal || !modalCard) {
      return;
    }

    modal.classList.remove("pointer-events-none", "opacity-0");
    modal.classList.add("opacity-100");

    setTimeout(() => {
      modalCard.classList.remove("scale-95", "opacity-0");
      modalCard.classList.add("scale-100", "opacity-100");
    }, 10);
  }

  function closeModal(modal, modalCard) {
    if (!modal || !modalCard) {
      return;
    }

    modalCard.classList.remove("scale-100", "opacity-100");
    modalCard.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.remove("opacity-100");
      modal.classList.add("opacity-0", "pointer-events-none");
    }, 250);
  }

  btnUserRole.addEventListener("click", () => {
    updateRoleUI("user");
    closeModal(adminModal, adminModalCard);
    closeModal(successModal, successModalCard);
  });

  btnAdminRole.addEventListener("click", () => {
    updateRoleUI("admin");
    closeModal(successModal, successModalCard);
    openModal(adminModal, adminModalCard);
  });

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (selectedRoleInput.value === "admin") {
      closeModal(successModal, successModalCard);
      openModal(adminModal, adminModalCard);
    } else {
      closeModal(adminModal, adminModalCard);
      openModal(successModal, successModalCard);
    }
  });

  if (btnCancelModal) {
    btnCancelModal.addEventListener("click", () => closeModal(adminModal, adminModalCard));
  }

  if (btnOkModal) {
    btnOkModal.addEventListener("click", () => closeModal(adminModal, adminModalCard));
  }

  if (btnCloseSuccessModal) {
    btnCloseSuccessModal.addEventListener("click", () => closeModal(successModal, successModalCard));
  }

  if (btnGoToProducts) {
    btnGoToProducts.addEventListener("click", () => {
      closeModal(successModal, successModalCard);
      window.location.href = "products.html";
    });
  }

  if (adminModal) {
    adminModal.addEventListener("click", (e) => {
      if (e.target === adminModal) {
        closeModal(adminModal, adminModalCard);
      }
    });
  }

  if (successModal) {
    successModal.addEventListener("click", (e) => {
      if (e.target === successModal) {
        closeModal(successModal, successModalCard);
      }
    });
  }

  updateRoleUI("user");
});
