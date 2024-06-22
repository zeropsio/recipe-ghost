import { c as e, j as s, u as O, a as te, b as P, d as $, B as K, e as ae, H as T, N as D, f as le } from "./index-d851aa59.mjs";
const oe = ({
  shiftY: l,
  footerBgColorClass: n = "bg-white dark:bg-black",
  contentBgColorClass: i = "bg-white dark:bg-black",
  height: c = 96,
  children: m
}) => {
  const h = e(
    "w-100 sticky bottom-[-24px] z-[297] m-0 box-border p-0"
  ), g = l ? `calc(${l} - 24px)` : "-24px", x = `${c + 24}px`, u = e(
    "sticky z-[298] block h-[24px]",
    i
  ), j = "0", k = e(
    "sticky z-[299] mb-[-24px] flex items-center justify-between",
    "h-[96px]",
    n
  ), p = "0", v = `${c}px`, b = "sticky mx-2 block h-[24px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.025),0_-8px_16px_-3px_rgba(0,0,0,.08)]", B = l ? `calc(${l} + ${c - 24}px)` : `${c - 24}px`;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: h,
      style: {
        bottom: g,
        height: x
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: u,
            style: {
              bottom: j
            }
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: k,
            style: {
              bottom: p,
              height: v
            },
            children: m
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: b,
            style: {
              bottom: B
            }
          }
        )
      ]
    }
  );
};
function F(l, n, i = {}) {
  l ? D.show(ce, {
    title: "Are you sure you want to leave this page?",
    prompt: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("p", { children: "Hey there! It looks like you didn't save the changes you made." }),
      /* @__PURE__ */ s.jsx("p", { children: "Save before you go!" })
    ] }),
    okLabel: "Leave",
    cancelLabel: "Stay",
    okColor: "red",
    onOk: (c) => {
      n(), c == null || c.remove();
    },
    ...i
  }) : n();
}
const ne = "bg-[rgba(98,109,121,0.2)] backdrop-blur-[3px]", U = ({
  size: l = "md",
  width: n,
  height: i,
  testId: c,
  title: m,
  okLabel: h = "OK",
  okLoading: g = !1,
  cancelLabel: x = "Cancel",
  footer: u,
  header: j,
  leftButtonProps: k,
  buttonsDisabled: p,
  padding: v = !0,
  onOk: b,
  okColor: B = "black",
  onCancel: N,
  topRightContent: y,
  hideXOnMobile: W = !1,
  afterClose: C,
  children: X,
  backDrop: q = !0,
  backDropClick: J = !0,
  stickyFooter: z = !1,
  stickyHeader: Q = !1,
  scrolling: R = !0,
  dirty: E = !1,
  animate: V = !0,
  formSheet: M = !1,
  enableCMDS: Z = !0
}) => {
  const H = O(), { setGlobalDirtyState: I } = te(), [G, Y] = P(!1);
  $(() => {
    I(E);
  }, [E, I]), $(() => {
    const r = (f) => {
      f.key === "Escape" && (document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        N ? N() : F(E, () => {
          H.remove(), C == null || C();
        });
      }), f.stopPropagation());
    };
    return document.addEventListener("keydown", r), () => {
      document.removeEventListener("keydown", r);
    };
  }, [H, E, C, N]), $(() => {
    const r = setTimeout(() => {
      Y(!0);
    }, 250);
    return () => clearTimeout(r);
  }, []), $(() => {
    if (b) {
      const r = (f) => {
        (f.metaKey || f.ctrlKey) && f.key === "s" && (f.preventDefault(), b());
      };
      if (Z)
        return window.addEventListener("keydown", r), () => {
          window.removeEventListener("keydown", r);
        };
    }
  });
  const _ = [];
  let A;
  const S = () => {
    F(E, () => {
      H.remove(), C == null || C();
    });
  };
  u || (x && _.push({
    key: "cancel-modal",
    label: x,
    color: "outline",
    onClick: N || (() => {
      S();
    }),
    disabled: p
  }), h && _.push({
    key: "ok-modal",
    label: h,
    color: B,
    className: "min-w-[80px]",
    onClick: b,
    disabled: p,
    loading: g
  }));
  let a = e(
    "relative z-50 mx-auto flex max-h-[100%] w-full flex-col justify-between overflow-x-hidden bg-white dark:bg-black",
    l !== "bleed" && "rounded",
    M ? "shadow-md" : "shadow-xl",
    V && !M && !G && "animate-modal-in",
    M && !G && "animate-modal-in-reverse",
    R ? "overflow-y-auto" : "overflow-y-hidden"
  ), o = e(
    "fixed inset-0 z-[1000] h-[100vh] w-[100vw]"
  ), d = "", t = e(
    !y || y === "close" ? "" : "flex items-center justify-between gap-5"
  );
  switch (Q && (t = e(
    t,
    "sticky top-0 z-[200] -mb-4 bg-white !pb-4 dark:bg-black"
  )), l) {
    case "sm":
      a = e(
        a,
        "max-w-[480px]"
      ), o = e(
        o,
        "p-4 md:p-[8vmin]"
      ), d = "p-8", t = e(
        t,
        "-inset-x-8"
      );
      break;
    case "md":
      a = e(
        a,
        "max-w-[720px]"
      ), o = e(
        o,
        "p-4 md:p-[8vmin]"
      ), d = "p-8", t = e(
        t,
        "-inset-x-8"
      );
      break;
    case "lg":
      a = e(
        a,
        "max-w-[1020px]"
      ), o = e(
        o,
        "p-4 md:p-[4vmin]"
      ), d = "p-7", t = e(
        t,
        "-inset-x-8"
      );
      break;
    case "xl":
      a = e(
        a,
        "max-w-[1240px]0"
      ), o = e(
        o,
        "p-4 md:p-[3vmin]"
      ), d = "p-10", t = e(
        t,
        "-inset-x-10 -top-10"
      );
      break;
    case "full":
      a = e(
        a,
        "h-full"
      ), o = e(
        o,
        "p-4 md:p-[3vmin]"
      ), d = "p-10", t = e(
        t,
        "-inset-x-10"
      );
      break;
    case "bleed":
      a = e(
        a,
        "h-full"
      ), d = "p-10", t = e(
        t,
        "-inset-x-10"
      );
      break;
    default:
      o = e(
        o,
        "p-4 md:p-[8vmin]"
      ), d = "p-8", t = e(
        t,
        "-inset-x-8"
      );
      break;
  }
  v || (d = "p-0"), a = e(
    a
  ), t = e(
    t,
    d,
    "pb-0"
  ), A = e(
    d,
    "py-0"
  ), o = e(
    o,
    "max-[800px]:!pb-20"
  );
  const ee = e(
    `${d} ${z ? "py-6" : ""}`,
    "flex w-full items-center justify-between"
  );
  A = e(
    A,
    (l === "full" || l === "bleed" || i === "full" || typeof i == "number") && "grow"
  );
  const se = (r) => {
    r.target === r.currentTarget && J && S();
  }, L = {};
  typeof n == "number" ? (L.width = "100%", L.maxWidth = n + "px") : n === "full" && (a = e(
    a,
    "w-full"
  )), typeof i == "number" ? (L.height = "100%", L.maxHeight = i + "px") : i === "full" && (a = e(
    a,
    "h-full"
  ));
  let w;
  return u ? w = u : u === !1 ? A += " pb-0 " : w = /* @__PURE__ */ s.jsxs("div", { className: ee, children: [
    /* @__PURE__ */ s.jsx("div", { children: k && /* @__PURE__ */ s.jsx(K, { ...k }) }),
    /* @__PURE__ */ s.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ s.jsx(ae, { buttons: _ }) })
  ] }), w = z ? /* @__PURE__ */ s.jsx(oe, { height: 84, children: w }) : /* @__PURE__ */ s.jsx(s.Fragment, { children: w }), /* @__PURE__ */ s.jsxs("div", { className: o, id: "modal-backdrop", onMouseDown: se, children: [
    /* @__PURE__ */ s.jsx("div", { className: e(
      "pointer-events-none fixed inset-0 z-0",
      q && !M && ne,
      M && "bg-[rgba(98,109,121,0.08)]"
    ) }),
    /* @__PURE__ */ s.jsxs("section", { className: a, "data-testid": c, style: L, children: [
      j === !1 ? "" : !y || y === "close" ? /* @__PURE__ */ s.jsxs("header", { className: t, children: [
        m && /* @__PURE__ */ s.jsx(T, { level: 3, children: m }),
        /* @__PURE__ */ s.jsx("div", { className: `${y !== "close" && "md:!invisible md:!hidden"} ${W && "hidden"} absolute right-6 top-6`, children: /* @__PURE__ */ s.jsx(K, { className: "-m-2 cursor-pointer p-2 opacity-50 hover:opacity-100", icon: "close", iconColorClass: "text-black dark:text-white", size: "sm", testId: "close-modal", unstyled: !0, onClick: S }) })
      ] }) : /* @__PURE__ */ s.jsxs("header", { className: t, children: [
        m && /* @__PURE__ */ s.jsx(T, { level: 3, children: m }),
        y
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: A, children: X }),
      w
    ] })
  ] });
}, ie = ({
  title: l = "Are you sure?",
  prompt: n,
  cancelLabel: i = "Cancel",
  okLabel: c = "OK",
  okRunningLabel: m = "...",
  okColor: h = "black",
  onCancel: g,
  onOk: x,
  customFooter: u,
  formSheet: j = !0
}) => {
  const k = O(), [p, v] = P("");
  return /* @__PURE__ */ s.jsx(
    U,
    {
      backDropClick: !1,
      buttonsDisabled: p === "running",
      cancelLabel: i,
      footer: u,
      formSheet: j,
      okColor: h,
      okLabel: p === "running" ? m : c,
      testId: "confirmation-modal",
      title: l,
      width: 540,
      onCancel: g,
      onOk: async () => {
        v("running");
        try {
          await (x == null ? void 0 : x(k));
        } catch (b) {
          console.error("Unhandled Promise Rejection. Make sure you catch errors in your onOk handler.", b);
        }
        v("");
      },
      children: /* @__PURE__ */ s.jsx("div", { className: "py-4 leading-9", children: n })
    }
  );
}, ce = D.create(ie), de = D.create(() => {
  const { updateRoute: l } = le(), n = D.useModal();
  return /* @__PURE__ */ s.jsx(
    U,
    {
      afterClose: () => {
        l("");
      },
      cancelLabel: "",
      okLabel: "Close",
      size: "sm",
      title: "About",
      onOk: () => {
        l(""), n.remove();
      },
      children: /* @__PURE__ */ s.jsxs("div", { className: "mt-3 flex flex-col gap-4", children: [
        /* @__PURE__ */ s.jsx("p", { children: "You're looking at a React app inside Ghost Admin. It uses common AdminX framework and Design System packages, and works seamlessly with the current Admin's routing." }),
        /* @__PURE__ */ s.jsx("p", { children: "At the moment the look and feel follows the current Admin's style to blend in with existing pages. However the system is built in a very flexible way to allow easy updates in the future." }),
        /* @__PURE__ */ s.jsx(T, { className: "-mb-2 mt-4", level: 5, children: "Contents" }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          "The demo uses a mocked list of members — it's ",
          /* @__PURE__ */ s.jsx("strong", { children: "not" }),
          " ",
          "the actual or future design of members in Ghost Admin. Instead, the pages showcase common design patterns like a list and detail, navigation, modals and toasts."
        ] })
      ] })
    }
  );
}), me = { DemoModal: de };
export {
  me as default
};
//# sourceMappingURL=modals-e82d1de3.mjs.map
