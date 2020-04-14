class AddSaleToProperties < ActiveRecord::Migration[6.0]
  def change
    add_column :properties, :for_sale, :boolean
  end
end
