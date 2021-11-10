class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :arts
end
