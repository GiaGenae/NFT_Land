class ArtSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description
  belongs_to :gallery
end
