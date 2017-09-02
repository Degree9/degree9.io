(ns app.nobackend
  (:require [meta.nobackend :as nb]
            ))

(def user= #(nb/user= :firebase))

(def users= #(nb/users= :firebase))

(def navigation= #(nb/navigation= :firebase))

(def dashboard= #(nb/dashboard= :firebase))

(def auth! #(nb/auth! :firebase))
