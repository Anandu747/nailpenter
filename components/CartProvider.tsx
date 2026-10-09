"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = { title: string; price: string; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  add: (item: { title: string; price: string }) => void;
  changeQty: (title: string, delta: number) => void;
  remove: (title: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "nailbento-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // load once
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setReady(true);
  }, []);

  // persist
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items, ready]);

  const add = useCallback((item: { title: string; price: string }) => {
    setItems((prev) => {
      const found = prev.find((i) => i.title === item.title);
      if (found) {
        return prev.map((i) =>
          i.title === item.title ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  }, []);

  const changeQty = useCallback((title: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.title === title ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const remove = useCallback((title: string) => {
    setItems((prev) => prev.filter((i) => i.title !== title));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      isOpen,
      setOpen,
      add,
      changeQty,
      remove,
      clear,
    }),
    [items, isOpen, add, changeQty, remove, clear]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}