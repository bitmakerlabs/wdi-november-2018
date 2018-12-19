class ProductsController < ApplicationController
  def index
    # @products = Product.all

    response = HTTParty.get("https://lcboapi.com/products?access_key=#{ENV['LCBO_API']}").body
    @response = JSON.parse(response)

    render json: {
      results: @response["result"].map do |product|
        { name: product["name"], image: product["image_thumb_url"] }
      end
    }
  end
end


# "http://lcboapi.com/products?access_key=foo"
