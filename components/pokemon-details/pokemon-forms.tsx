import { Form } from "@/types";
import Image from "next/image";
import React from "react";

export default function PokemonForms({ forms }: { forms: Form | null }) {
  return (
    <div>
      {forms && (
        <div className="bg-purple-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-purple-800">
            Pokemon Forms
          </h2>
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium capitalize text-purple-800">
                    {forms.form_name || "Default Form"}
                  </h3>
                  <div className="flex gap-2">
                    {forms.is_mega && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        Mega
                      </span>
                    )}
                    {forms.is_battle_only && (
                      <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                        Battle Only
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3">
                  {forms.sprites.front_default && (
                    <div className="text-center">
                      <Image
                        src={forms.sprites.front_default}
                        alt={`${forms.form_name} front`}
                        width={96}
                        height={96}
                        className="mx-auto"
                      />
                      <span className="text-sm text-gray-600">Front View</span>
                    </div>
                  )}
                  {forms.sprites.back_default && (
                    <div className="text-center">
                      <Image
                        src={forms.sprites.back_default}
                        alt={`${forms.form_name} back`}
                        width={96}
                        height={96}
                        className="mx-auto"
                      />
                      <span className="text-sm text-gray-600">Back View</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {forms.sprites.back_shiny && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium capitalize text-purple-800">
                      {forms.form_name || "Shiny Form"}
                    </h3>
                    <div className="flex gap-2">
                      {forms.is_mega && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          Mega
                        </span>
                      )}
                      {forms.is_battle_only && (
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                          Battle Only
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-3">
                    {forms.sprites.front_shiny && (
                      <div className="text-center">
                        <Image
                          src={forms.sprites.front_shiny}
                          alt={`${forms.form_name} front`}
                          width={96}
                          height={96}
                          className="mx-auto"
                        />
                        <span className="text-sm text-gray-600">
                          Front View
                        </span>
                      </div>
                    )}
                    {forms.sprites.back_shiny && (
                      <div className="text-center">
                        <Image
                          src={forms.sprites.back_shiny}
                          alt={`${forms.form_name} back`}
                          width={96}
                          height={96}
                          className="mx-auto"
                        />
                        <span className="text-sm text-gray-600">Back View</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {forms.sprites.front_female && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium capitalize text-purple-800">
                      {forms.form_name || "Default Female Form"}
                    </h3>
                    <div className="flex gap-2">
                      {forms.is_mega && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          Mega
                        </span>
                      )}
                      {forms.is_battle_only && (
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                          Battle Only
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-3">
                    {forms.sprites.front_female && (
                      <div className="text-center">
                        <Image
                          src={forms.sprites.front_female}
                          alt={`${forms.form_name} front`}
                          width={96}
                          height={96}
                          className="mx-auto"
                        />
                        <span className="text-sm text-gray-600">
                          Front View
                        </span>
                      </div>
                    )}
                    {forms.sprites.back_female && (
                      <div className="text-center">
                        <Image
                          src={forms.sprites.back_female}
                          alt={`${forms.form_name} back`}
                          width={96}
                          height={96}
                          className="mx-auto"
                        />
                        <span className="text-sm text-gray-600">Back View</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {forms.sprites.back_shiny_female && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium capitalize text-purple-800">
                      {forms.form_name || "Shiny Female Form"}
                    </h3>
                    <div className="flex gap-2">
                      {forms.is_mega && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          Mega
                        </span>
                      )}
                      {forms.is_battle_only && (
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                          Battle Only
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-3">
                    {forms.sprites.front_shiny_female && (
                      <div className="text-center">
                        <Image
                          src={forms.sprites.front_shiny_female}
                          alt={`${forms.form_name} front`}
                          width={96}
                          height={96}
                          className="mx-auto"
                        />
                        <span className="text-sm text-gray-600">
                          Front View
                        </span>
                      </div>
                    )}
                    {forms.sprites.back_shiny_female && (
                      <div className="text-center">
                        <Image
                          src={forms.sprites.back_shiny_female}
                          alt={`${forms.form_name} back`}
                          width={96}
                          height={96}
                          className="mx-auto"
                        />
                        <span className="text-sm text-gray-600">Back View</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
