class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :age
      t.string :profile_image
      t.string :account_image
      t.boolean :is_verified
      t.string :password_digest

      t.timestamps
    end
  end
end
