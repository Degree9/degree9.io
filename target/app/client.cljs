(ns app.client
  (:refer-clojure :exclude [find get update remove])
  (:require 
            [meta.client :as client]
            ))

;; Client Services ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def users (client/service "users"))

;; Client Service API ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def find client/find)

(def get client/get)

(def create client/create)

(def update client/update)

(def patch client/patch)

(def remove client/remove)

;; Client Event API ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def on client/on)

(def created client/created)

(def updated client/updated)

(def patched client/patched)

(def removed client/removed)

;; Client Auth API ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def auth! client/auth!)

(def login! client/login!)

(def logout! client/logout!)

(def signup! client/signup!)
