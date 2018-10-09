class Bench < ApplicationRecord
  validates :name, :description, :lat, :lng, presence: true
  validates :name, uniqueness: true
end
